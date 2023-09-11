var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('dotenv').config();

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require('cors');
const mongoose = require('mongoose');
const {MongoDB}= process.env;
const bodyParser=require('body-parser');

var app = express();






// view engine setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors(''));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



mongoose.connect(MongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("successfully connected"))
.catch((err)=>{console.log(err)});




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter= require('./routes/posts')



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
