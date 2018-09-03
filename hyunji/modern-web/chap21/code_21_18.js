// 모듈을 추출합니다.
var express = require('express');

// 웹서버를 생성합니다.
var app = express();
app.use(express.static('public'));

// 라우트 합니다. (= 사용자 요청에 따라 사용자가 필요한 정보 제공합니다.)
app.all('/a', function (request, response) {
    response.send('<h1>Page A</h1>')
});
app.all('/b', function (request, response) {
    response.send('<h1>Page B</h1>')
});
app.all('/c', function (request, response) {
    response.send('<h1>Page C</h1>')
});

// 웹서버를 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});