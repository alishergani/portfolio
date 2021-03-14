const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const helpers = require('./helpers');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const app = express();

require('./config/passport')(passport)

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(session({
  secret : 'secret',
  resave : false,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req,res,next)=> {
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error  = req.flash('error');
  next();
})


app.use(cookieParser());

app.use('/', routes);

module.exports = app;