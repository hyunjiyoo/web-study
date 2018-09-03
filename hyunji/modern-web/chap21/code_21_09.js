// 모듈을 추출합니다.
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();

// 사용자의 요청을 처리하면서 지나가는 app.use() 메서드의 콜백함수를 미들웨어라고 부릅니다.
// 명령 프롬프트에 first, second, first, second 출력
// 웹 브라우저로 한번 접속했는데 두번 접속으로 뜨는 것은 웹브라우저가 웹사이트의 파비콘을 얻고자 자동 요청하기 때문.
// 파비콘은 웹 브라우저 상단에 표시되는 아이콘.
app.use(function (request, response, next) {
    console.log('first');
    next();
});
app.use(function (request, response, next) {
    console.log('second');
    next();
});
app.use(function (request, response, next) {
    response.send('<h1>Hello Middleware..!</h1>');
});

// 웹 서버를 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

