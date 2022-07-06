const {
  createUser,
  deleteAllUser,
  findUserByAnything,
} = require("../service/auth.service");

const bcrypt = require("bcrypt");
const { genarateJWT } = require("../utils/auth.utils");

const registration = async (req, res) => {
  const { name, email, password, newsletter } = req.body;

  if ((!name, !email, !password)) {
    return res.status(400).render("testing/index", { msg: "somthing missing" });
  }

  const { token, error } = await createUser(name, email, password, newsletter);

  if (error) return res.redirect(`/user/auth/registration?error=${error}`);
  res.cookie("userInfo", token);
  res.redirect(`/`);
};

// login controller

async function login(req, res) {
  const { email, password } = req.body;
  let error = "somthing missing";
  const url = "/user/auth/login?error=";
  if ((!email, !password)) return res.redirect(url + error);

  console.log(email);
  const user = await findUserByAnything({email});
  error = "invalid user name or password";
  if (!user) return res.redirect(url + error);

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch, email, user.email, user.password);
  if (!isMatch) return res.redirect(url + error);

  const token = genarateJWT(user._doc);

  res.cookie("userInfo", token);

  res.redirect("/");
}

// logout controller

function logout(_req, res) {
  res.clearCookie("userInfo");
  res.redirect("/");
}

// delete all users only for development purpose

function deleteAll(req, res) {
  deleteAllUser();
  res.status(200).json({ msg: "all user deleted" });
}

module.exports = { registration, login, logout, deleteAll };
