/* cookie-parser 미들웨어: 요청쿠키 추출하는 미들웨어 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

// 미들웨어 설정
app.use(cookieParser());

app.get('/getCookie', function (req, res) {
    res.send(req.cookies);
});

app.get('/setCookie', function (req, res) {
    // 쿠키생성
    res.cookie('string', 'cookie');
    res.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });

    res.redirect('/getCookie');
});

app.listen(52273);