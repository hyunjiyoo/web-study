// 모듈 추출
var express = require('express');

// 웹 서버 생성
var app = express();
app.all('/parameter', function (request, response) {
    // 일반 요청 매개변수 추출할 때는 request.query 객체 사용.
    var name = request.param('name');
    var region = request.param('region');

    // 응답합니다.
    response.send('<h1>' + name + ':' + region + '</h1>');
});

// 웹 서버 실행
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});