const mongoose = require("mongoose");

const postSchemas = require("../model/Posts.js");

const [Anything, Private, Promotion, postArray] = postSchemas;

function returntypeOfCategory(category) {
  console.log(category);
  let type;
  switch (category) {
    case "Private":
      type = Private;
      break;
    case "Promotion":
      type = Promotion;
      break;
    case "":
    case "Anything":
      type = Anything;
      break;
    default:
      type = "404";
  }
  return type;
}

exports.readAll = async (req, res) => {
  const dataInput = await postArray.find();

  res.send(dataInput);
};

exports.read = async (req, res, category) => {
  console.log(category);

  const nameOfTitle = returntypeOfCategory(category);

  try {
    console.log(nameOfTitle);
    const response = await nameOfTitle.find();

    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "데이터 조회 중 오류가 발생했습니다." });
  }
};

exports.addComment = async (req, res, category, index) => {
  const comment = {};
  comment.userWalletAddress = req.body.userWalletAddress;
  comment.userName = req.body.userName;
  comment.vote = 0;
  comment.innerContent = req.body.innerContent;

  const nameOfTitle = returntypeOfCategory(category);
  const dataModify = await nameOfTitle
    .findOne({ index: index })
    .then((data) => {
      if (!data) {
        res.status(500).send("cant find data");
      }
      return data;
    });

  await dataModify.comments.push(comment);
  const dataSaved = await dataModify.save().then((result) => {
    console.log(result);
  });
  res.send(dataSaved);
};

//   const postDataSchema= new Schema({
//     userWalletAddress: String,
//     userName: String,
//     postTitle: String,
//     postContent: String,
//     timeStamp: String,
//     view: Number,
//     commets: Array,
//     vote: Number,
// });

exports.NewPost = async (req, res, category) => {
  const nameOfTitle = returntypeOfCategory(category);
  console.log(nameOfTitle);
  const bodyData = await req.body;

  const dataInputOnList = {
    postTitle: bodyData.postTitle,
    userWalletAddress: bodyData.userWalletAddress,
    timeStamp: 0,
    category: category,
    index: await nameOfTitle.count(),
  };

  const dataInputOnCategory = {
    userWalletAddress: bodyData.userWalletAddress,
    userName: bodyData.userName,
    postTitle: bodyData.postTitle,
    postContent: bodyData.postContent,
    view: 0,
    timeStamp: 0,

    comments: [],
    vote: 0,
    category: category,
    index: await nameOfTitle.count(),
  };

  try {
    const postUpload = await postArray(dataInputOnList);
    const postUploadCategory = await nameOfTitle(dataInputOnCategory);

    console.log(postUpload);

    const dataUpdatedList = await postUpload
      .save()
      .catch((error) => console.log(error));
    res.status(201).send(dataUpdatedList);

    const dataUpdated = await postUploadCategory
      .save()
      .catch((error) => console.log(error));
    res.status(201).send(dataUpdated);
  } catch (err) {
    res.status(400);
  }
};

exports.readIndividual = async (req, res, category, index) => {
  console.log(category);
  console.log(index);

  const nameOfTitle = returntypeOfCategory(category);

  if (!nameOfTitle) {
    res.status(404).send("page not found");
  }

  try {
    await nameOfTitle.findOne({ index: index }).then((result) => {
      res.send(result);
    });
  } catch (err) {
    res.status(404).send("page not found");
  }
};

exports.deletePost = async (req, res, category, index) => {
  const nameOfTitle = returntypeOfCategory(category);
  console.log(nameOfTitle);
  console.log(index);

  const rmDoc = await nameOfTitle
    .replaceOne(
      { index: index },
      {
        category: "deleted",
        index: index,
      }
    )
    .then((data) => {
      if (!data) {
        res.status(404).send("page not found");
      }
    });

  await postArray.replaceOne(
    { index: index },
    {
      postTitle: "deleted",
      userWalletAddress: "deleted",
      timeStamp: "0",
      index: index,
    }
  );

  await res.send(rmDoc);
};
