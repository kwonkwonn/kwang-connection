const mongoose=require('mongoose');


const postSchemas= require('../model/Posts.js');

const [Anything,Private, Promotion]=postSchemas;

// exports.read= async (req,res)=>{

//     const Response= await User.find();
//     res.send(Response);
// }

exports.read = async (req, res,post) => {
  let nameOfTitle;
  switch(post){
    case("Private"):
      nameOfTitle=Private;
      break;
    case("Promotion"):
      nameOfTitle=Promotion;
      break;
    case(""):
    case("Anything"):
      nameOfTitle=Anything;
      break;
    default:
      nameOfTitle="404";
  }
  
   try {
        console.log(nameOfTitle);
            const response = await nameOfTitle.find();
            res.send(response);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: '데이터 조회 중 오류가 발생했습니다.' });
            }
      }
  
  




exports.NewPost= async (req,res, category)=>{

  let nameOfTitle;
  switch(category){
    case("Private"):
      nameOfTitle=Private;
      break;
    case("Promotion"):
      nameOfTitle=Promotion;
      break;
    case("Anything"):
      nameOfTitle=Anything;
      break;
    default:
      console.log(category);
      nameOfTitle="404";
  }

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
    const bodyData= await req.body;

    console.log(nameOfTitle);

    const dataInput={
      view:0,
      timeStamp:0,
      commets:[],
      vote:0,      
    }

    dataInput.userWalletAddress= bodyData.userWalletAddress;
    dataInput.userName= bodyData.userName;
    dataInput.postTitle= bodyData.postTitle;
    dataInput.postContent= bodyData.postContent;
    try{  
    const postUpload= await nameOfTitle(dataInput);

    const dataUpdated = await postUpload.save();

   res.status(201).send(dataUpdated);

    }catch(err){ 
      res.status(400);
    }
  
}



  
  
  
  