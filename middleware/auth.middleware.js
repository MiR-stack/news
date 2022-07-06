const jwt = require("jsonwebtoken");
const { findUserByAnything } = require("../service/auth.service");

async function authentication(req, _res, next) {
  const token = req.cookies.userInfo;

  if (!token) return next();

  const verify = jwt.verify(token, process.env.SECRET_KEY);
  const email = verify.email;
  const user = await findUserByAnything(email);

  if (!user) {
    req.body.error = "unauthorized";
    next();
  }

  req.body.user = user;
  next();
}

// user info

function userInfo(req,_res,next){
  const token = req.cookies.userInfo;

  if (!token) return next();

  const user = jwt.verify(token, process.env.SECRET_KEY);

  req.body.user = user
  next()
}

module.exports = { authentication, userInfo };
