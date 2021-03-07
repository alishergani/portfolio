const mongoose = require('mongoose');
// const User = mongoose.model('User');


exports.isLoggedIn = (req, res, next) => {
    // first check if the user is authenticated
    if (!req.isAuthenticated()) {
        next(); // carry on! They are logged in!
        return;
    }
    res.send("You aren't logged in!")
    res.redirect('/login');
};