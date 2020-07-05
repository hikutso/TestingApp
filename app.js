const express=require('express');
const expressLayout=require('express-ejs-layouts');
const mongoose=require('mongoose');
const flash=require('connect-flash');
const passport = require('passport');
const session=require('express-session')
const hbs = require('hbs')

var path = require('path');
const ejsLint = require('ejs-lint');
require('./config/keys')

const geocode = require('./src/utils/geocode')
const forecast = require('./src/utils/forecast')


const app= express();



// Passport Config
require('./config/passport')(passport);

const publicDirectoryPath = path.join(__dirname, './public')



//EJS
// app.use(expressLayout);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));



//BodyParser
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicDirectoryPath))


// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Connect flash
  app.use(flash());
  
  // Global variables
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/user'));
app.use('/',require('./routes/contact'));

const PORT=process.env.PORT||5000;






app.listen(PORT,console.log(`server is in port ${PORT}`));