/* 서버 기본 설정 */
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

// 라우터 설정
app.get('/', function (req, res) {

});
app.get('/login', function (req, res) {

});
app.post('/login', function (req, res) {

});

app.listen(52273);