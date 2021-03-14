const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.registerPage = async (req, res) => {
    res.render("register")
};

exports.loginPage = async (req, res, next) => {
    res.render("login")
};


exports.register = async (req, res, next) => {
    const {name, email, password} = req.body;
    let errors = [];
    console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
    if(!name || !email || !password) {
        errors.push({msg : "Please fill in all fields"})
    }

    if(errors.length > 0 ) {
        res.render('index')
    } else {
        User.findOne({email : email}).exec((err,user)=>{
            console.log(user);   
            if(user) {
                errors.push({msg: 'email already registered'});
                res.render('register',{ errors, name, email, password})  
            } else {
                const newUser = new User({
                    name : name,
                    email : email,
                    password : password
                });
        
                //hash password
                bcrypt.genSalt(10,(err,salt) => 
                bcrypt.hash(newUser.password, salt, (err,hash)=> {
                    if(err) throw err;
                    //save pass to hash
                    newUser.password = hash;
                    //save user
                    newUser.save()
                    .then((value)=>{
                        console.log(value)
                        req.flash('success_msg','You have now registered!');
                        res.redirect('/blog');
                    })
                    .catch((value) => console.log(value));
                }));
            }
        })
    }

};

exports.login = async (req,res,next) => {
    passport.authenticate('local',{
        successRedirect : '/blog',
        failureRedirect: '/login',
        failureFlash : true
    })(req,res,next)
}