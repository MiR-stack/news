const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  posts: Array,
  socialM: Object,
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  Number: {
    type: [Number],
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
