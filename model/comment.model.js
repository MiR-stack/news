const mongoose = require("mongoose");

const replySchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const commentSchema = new mongoose.Schema({
  postID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  replies: [replySchema],
  love: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
