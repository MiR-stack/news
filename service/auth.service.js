const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const { genarateJWT } = require("../utils/auth.utils");

async function createUser(name, email, password, newsletter) {
  try {
    let user = await User.findOne({ email });

    if (user) return { error: "invalid email or password" };

    user = new User({ name, email, password, newsletter });
    user.password = await bcrypt.hash(password, 10);

    user = await user.save();

    const token = genarateJWT(user._doc);
    return { token, userID: user._id };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

async function findUserById(id) {
  const user = await User.findById(id);
  if (!user) return { msg: "enter correct id" };
  return user;
}

function findUserByAnything(term) {
  return User.findOne({...term});
}

async function deleteAllUser() {
  const users = await User.deleteMany();
  console.log(users);
}

module.exports = {
  createUser,
  findUserById,
  findUserByAnything,
  deleteAllUser,
};
