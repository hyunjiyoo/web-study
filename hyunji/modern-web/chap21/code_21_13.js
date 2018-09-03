// 모듈을 추출합니다.
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();
// static 미들웨어
// express.static() - 매개변수에는 제공할 파일이 들어 있는 폴더 이름 입력.
app.use(express.static('public'));
app.use(function (request, response) {
    response.send('<h1>Hello Middleware..!</h1>');
});

// 웹 서버를 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});