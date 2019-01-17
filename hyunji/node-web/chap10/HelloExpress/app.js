// 외부 모듈 추출
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 사용자 정의 모듈 추출
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 서버 생성
var app = express();

// 서버 설정
app.set('case sensitive routes', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 미들웨어 설정
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var session = require('express-session');
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 미들웨어 설정
// GET - /
app.get('/', indexRouter);
app.get('/users', usersRouter);
// GET - /product
app.get('/product', function (request, response) {
    response.render('product', {
        title: 'Product Page'
    });
});
// GET - /product/insert
app.get('/product/insert', function (request, response) {
    response.render('product/insert', {
        title: 'Insert Page'
    });
});
// GET - /product/edit
app.get('/product/edit', function (request, response) {
    response.render('product/edit', {
        title: 'Edit Page'
    });
});

// 404 에러 발생시 메세지 출력
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
  // development 환경에서의 오류 처리
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // production 환경에서의 오류 처리
  res.status(err.status || 500);
  res.render('error');
});

// 모듈화
module.exports = app;
