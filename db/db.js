const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pepoleTimes")
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

module.exports = mongoose;
