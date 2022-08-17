const mongoose = require("mongoose");

const url =process.env.MONGODB_URI || 'mongodb://localhost:27017/newspaper'

mongoose
  .connect(url)
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

module.exports = mongoose;

