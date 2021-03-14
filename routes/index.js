const express = require('express')
const router = express.Router()
const postController = require('./../controllers/postController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const {isAuthenticated} = require('../config/auth') 


router.get('/', postController.getPosts)

router.get('/register', authController.registerPage)
router.get('/login', authController.loginPage)

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/profile', 
    isAuthenticated, 
    userController.profilePage)
router.get('/blog', 
    postController.blogPage)
router.get('/blog/:slug', 
    isAuthenticated, 
    postController.getOnePost)
router.get('/create', 
    isAuthenticated, 
    postController.createPostPage)
router.post('/create', 
    isAuthenticated, 
    postController.createPost)






module.exports = router