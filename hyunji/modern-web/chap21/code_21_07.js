// 모듈을 추출합니다.
var express = require('express');

// 웹 서버 생성합니다.
var app = express();

// 웹 서버에 기능 부여.
app.use(function (request, response) {
    response.send('<h1>안녕하세요!</h1>');
});

// 웹 서버 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});