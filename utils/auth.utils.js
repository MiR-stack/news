const jwt = require("jsonwebtoken");

function genarateJWT(user) {
  return jwt.sign(user, process.env.SECRET_KEY);
}

module.exports = { genarateJWT };
