declare global {
  interface feedData {
    userWalletAddress: String;
    userName: String;
    postTitle: String;
    postContent: String;
    timeStamp: String;
    view: Number;
    comments: Array<comments>;
    vote: Number;
    category: String;
    index: Number;
  }

  interface feedList {
    postTitle: String;
    userWalletAddress: String;
    timeStamp: String;
    category: String;
    index: Number;
  }
  interface comments {
    userWalletAddress: String;
    commentsContext: String;
    vote: Number;
  }
}
export {};
