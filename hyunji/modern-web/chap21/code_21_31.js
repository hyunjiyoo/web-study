// 모듈 추출
var express = require('express');

// 웹 서버 생성
var app = express();

// 동적 라우트 ( app.all('/wiki/:keyword', function(----) )
app.all('/parameter/:id', function (request, response) {
    // 식별자를 request.params 객체에서 추출.
    var id = request.params.id;

    response.send('<h1>' + id + '</h1>');
});

// 웹 서버 실행
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});