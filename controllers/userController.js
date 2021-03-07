const mongoose = require('mongoose')
// const User = mongoose.model('User')

exports.loginForm = (req, res) => {
    res.render('login');
};

exports.profilePage = (req, res) => {
    res.render('profile');
};


