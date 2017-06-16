require('./service/mongodb');//调数据库

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session =require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//使用cookie验证权限(建议使用access_token验证)
app.use(cookieParser('ee-33-ff'));
app.use(session({
	secret:'ff-123-dd',
	cookie:{
    'maxAge':600000  //十分钟
  }
}));

app.use(express.static(path.join(__dirname, 'public')));


//调用路由
app.use('/', index);
app.use('/users', users);
// app.post('/loginTest',function(res,req,next){
// 	console.log("name=="+res.body.name);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
