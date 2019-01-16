var express = require('express');
var app = express();

/* 응답을 완료하기 전까지 요청 중간중간에 여러가지 일을 처리할 수 있다 */
app.use(function (req, res, next) {
    console.log('첫번째 미들웨어');
    next();
});

app.use(function (req, res, next) {
    console.log('두번째 미들웨어');
    next();
});

app.use(function (req, res, next) {
    console.log('세번째 미들웨어');

    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.end('<h1>express basic</h1>');
});

app.listen(52273);