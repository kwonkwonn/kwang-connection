

const userSchema= require("../model/User");



exports.findUserName=(req,res)=>{
    const userData= userSchema.find();
    res.send(userData);
}



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

exports.postUserName= async (req,res)=>{
    //이미 있는 계정 공개키인지 검사하는 함수 필요함
    const bodyData= await req.body;
    console.log(bodyData);
    const userDefault={
        userWalletAddress: bodyData.userWalletAddress,
        userName:bodyData.userName,
        userPosts:{ 
                    "privacy":[],
                    "Anything":[],
                    "promotion":[]    
                },
                nftLists:[],
    }
    try{
    const userDataUpload= await userSchema(userDefault);

    const dataUpdated = await userDataUpload.save();

    res.status(201).send(dataUpdated);
    }catch(err){
        res.status(400);
    }

}