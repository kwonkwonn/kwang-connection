const mongoose = require("mongoose");

const {Schema} =mongoose;




    const postDataSchema= new Schema({
        userWalletAddress: String,
        userName: String,
        postTitle: String,
        postContent: String,
        timeStamp: String,
        view: Number,
        commets: Array,         
        vote:Number,
        
    });


    const postSchemaAny= mongoose.model('postsAboutAnything', postDataSchema);
    const postSchemaPri= mongoose.model('postsAboutPrivate', postDataSchema);
    const postSchemaPro= mongoose.model('postAboutPromotion', postDataSchema);


    module.exports= [postSchemaAny,postSchemaPri,postSchemaPro];
