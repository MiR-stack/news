const {
  homePage,
  register,
  login,
  createPost,
} = require("../controller/pages.controller");
const { authentication, userInfo } = require("../middleware/auth.middleware");

const router = require("express").Router();

// home page
router.get("/", authentication, homePage);

// register page
router.get("/user/auth/registration", userInfo, register);

//login page
router.get("/user/auth/login", userInfo, login);

// create post
router.get("/user/createPost", authentication, createPost);

module.exports = router;
