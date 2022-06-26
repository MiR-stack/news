const { homePage } = require('./controller');

const router = require('express').Router()



router.get('/',homePage)


module.exports = router;