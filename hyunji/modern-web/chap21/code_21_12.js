// 모듈 추출.
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session());
app.use(express.static('public'));

// 웹 서버 실행.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});