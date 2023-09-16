const { verifyMessage } = require("ethers");
const userSchema = require("../model/User");

exports.findUserName = (req, res) => {
  const userData = userSchema.find();
  res.send(userData);
};

// const userDataSchema= new Schema({
//     userWalletAddress: String,
//     userName: String,
//     userPosts:{
//         "privacy":[],
//         "Anything":[],
//         "promotion":[]
//     },
//     nftLists:[],
//     });

exports.postUserName = async (req, res) => {
  //이미 있는 계정 공개키인지 검사하는 함수 필요함
  const { walletAddress, message, signedMessage } = req.body;
  const addressVerfied = await verifyMessage(message, signedMessage);
  console.log(walletAddress);

  if (addressVerfied === walletAddress) {
    //거짓 fetch방지
    if (await checkIsExist(walletAddress)) {
      try {
        const userDefault = {
          userWalletAddress: walletAddress,
          userName: "ok",
          userPosts: {
            privacy: [],
            Anything: [],
            promotion: [],
          },
          nftLists: [],
        };
        const userDataUpload = await userSchema(userDefault);
        const dataUpdated = await userDataUpload.save();
        console.log(1123123);

        if (!dataUpdated) {
          res.status(500).send("잘못된 접근");
        }
        res.status(201).send(dataUpdated);
      } catch (err) {
        res.status(400);
      }
    } else {
      console.log(!checkIsExist(walletAddress));
      console.log(1);

      res.status(201).send("good to go");
    }
  }
  //계정이 이미 존재하는지 체크
};

async function checkIsExist(address) {
  let valid = false;
  await userSchema.count({ userWalletAddress: address }).then((response) => {
    if (response === 0) {
      valid = true;
    }
  });

  return valid;
}
