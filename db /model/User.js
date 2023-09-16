const mongoose = require("mongoose");

const { Schema } = mongoose;

const userDataSchema = new Schema({
  userWalletAddress: String,
  userName: String,
  userPosts: {
    privacy: [],
    Anything: [],
    promotion: [],
  },
  nftLists: [],
});

const UserDatas = mongoose.model("userDatas", userDataSchema);

module.exports = UserDatas;
