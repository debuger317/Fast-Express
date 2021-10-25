const router = require('express').Router();
const blog_controller = require('../controllers/blog')

router.post('/addnewblog', blog_controller.addnewblog)

router.get('/blogAll', blog_controller.GetAllBlogPosts)

router.delete('/:id', blog_controller.DeleteABlogPost)

module.exports = router;