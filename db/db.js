const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://pepolehours:MiR7904@cluster0.7ipibvh.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

module.exports = mongoose;
