const { registration,login, logout, deleteAll } = require("../controller/auth.controller");

const router = require("express").Router();

// registration
router.post("/registration", registration );

// login
router.post('/login',login)

// logout
router.get('/logout',logout)


// delete all users
router.get('/delete', deleteAll)

module.exports = router;
