const mongoose = require('mongoose')
const Post = mongoose.model('Post')

exports.blogPage = async(req, res) => {
    const postPromise = Post
        .find()
    const posts = await postPromise
    res.render('blog', {posts, user: req.user})
}

exports.getPosts = async(req, res) => {
    const postPromise = Post
        .find()
    const posts = await postPromise
    res.render('index')
}

exports.getOnePost = async(req, res) => {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return next();
    res.render('post', { post, title: post.title });
}

exports.createPost = async (req, res) => {
    const post = await (new Post(req.body)).save();
    res.redirect(`/blog/${post.slug}`)
    
}
exports.createPostPage = (req, res) => {
    res.render('createPost')
}