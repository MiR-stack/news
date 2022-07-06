const { createPost } = require('../controller/user.controller')

const router = require('express').Router()


/**
 * create post
 * @method POST
 * 
 */
router.post('/createPost', async (req,res)=>{
  const post =await createPost(req.body)
   res.send(post)
})



module.exports = router