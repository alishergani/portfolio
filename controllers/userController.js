const mongoose = require('mongoose')
// const User = mongoose.model('User')

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.profilePage = (req, res) => {
    res.render('profile');
};


