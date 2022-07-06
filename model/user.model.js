const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 12,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v
        );
      },
    },
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  membership: {
    type: String,
    enum: ["none", "gold", "platinum", "diamond"],
    required: true,
    default: "none",
  },
  subscribed: {
    type: String,
    enum: ["on", "off"],
    default: "off",
  },
  avatar: String,
  rank: {
    type: [String],
    required: true,
    enum: ["admin", "moderator", "writer", "geust_writer", "user"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
