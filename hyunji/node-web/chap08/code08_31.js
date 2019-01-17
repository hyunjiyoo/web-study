var express = require('express');
var session = require('express-session');
var app = express();

/*
   쿠키: 클라이언트위 웹브라우저에 정보저장
   세션: 서버에 정보저장
   express-session : 세션을 쉽게 생성할 수 있게 도와주는 미들웨어
 */

// 미들웨어 설정
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
}));

// 세션을 저장하고 출력
app.use(function (req, res) {
    // 세션을 저장
    req.session.now = (new Date()).toUTCString();
   // 응답
    res.send(req.session);
});

app.listen(52273);