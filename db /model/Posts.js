const mongoose = require("mongoose");

const { Schema } = mongoose;

const postList = new Schema({
  postTitle: String,
  userWalletAddress: String,
  timeStamp: String,
  category: String,
  index: Number,
});

const postDataSchema = new Schema({
  userWalletAddress: String,
  userName: String,
  postTitle: String,
  postContent: String,
  timeStamp: String,
  view: Number,
  comments: Array,
  vote: Number,
  category: String,
  index: Number,
});

const postArraySchema = mongoose.model("postArray", postList);
const postSchemaAny = mongoose.model("postsAboutAnything", postDataSchema);
const postSchemaPri = mongoose.model("postsAboutPrivate", postDataSchema);
const postSchemaPro = mongoose.model("postAboutPromotion", postDataSchema);

module.exports = [postSchemaAny, postSchemaPri, postSchemaPro, postArraySchema];
