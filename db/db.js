const mongoose = require("mongoose");

const url =process.env.MONGODB_URI || "mongodb+srv://pepolehours:MiR7904@cluster0.7ipibvh.mongodb.net/newspaper?retryWrites=true&w=majority"

mongoose
  .connect(url)
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

module.exports = mongoose;

