var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util= require('util');

var index = require('./routes/index');
var users = require('./routes/users');


//Database connection app wide
var mysql = require('mysql');
global.dbConnection = mysql.createConnection({
	host: 'localhost'
	,user: 'root'
	,password: ''
	,database: 'nodemysql'

});

//Pooling
global.pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'nodemysql'
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//app.use('/users/', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {

if(req.url.substr(-1) == '/' && req.url.length > 1)
      { res.redirect(301, req.url.slice(0, -1));}
   else {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);

    }


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
