const mongoose = require("mongoose");

const quotaSchema = new mongoose.Schema({
  pn: {
    type: Number,
    required: true,
  },
  quota: String,
  author: String,
});

const subImageSchema = new mongoose.Schema({
  pn: Number,
  img: {
    type: String,
    required: true,
  },
  source: String,
  shortDeccription: {
    type: String,
    minlength: 30,
    maxlength: 80,
  },
});

const postSchema = new mongoose.Schema({
  author: String,
  type: {
    type: String,
    enum: ["text", "html"],
  },
  title: {
    type: String,
    required: true,
    minlength: 12,
    maxlength: 30,
    unique: true,
  },
  shortDeccription: String,
  image: String,
  paragraph: {
    type: [String],
    required: true,
  },
  quotas: [quotaSchema],
  subImage: [subImageSchema],
  strong: String,
  date: {
    type: Date,
    default: new Date(),
  },
  views: String,
  share: {
    type: [String],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
