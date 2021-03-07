const express = require('express')
const router = express.Router()
const postController = require('./../controllers/postController')
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.get('/',  
    authController.isLoggedIn, 
    postController.getPosts
)
router.get('/login', userController.loginForm)
router.get('/profile', userController.profilePage)
router.get('/blog', 
    postController.blogPage
)
router.get('/blog/:slug', 
    postController.getOnePost
)

router.get('/create', postController.createPostPage)
router.post('/create', postController.createPost)






module.exports = router