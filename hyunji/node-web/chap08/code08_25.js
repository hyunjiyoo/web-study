/* 기본적인 로그인 구현 */
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

// 라우터 설정
app.get('/', function (req, res) {
    if (req.cookies.auth) {
        res.send('<h1>Login Success</h1>');
    } else {
        res.redirect('/login');
    }
});
app.get('/login', function (req, res) {
    fs.readFile('login.html', function (err, data) {
        res.send(data.toString());
    });
});
app.post('/login', function (req, res) {
    // 쿠키 생성
    var login = req.body.login;
    var password = req.body.password;

    console.log(login, password);
    console.log(req.body);

    // 로그인 확인
    if (login === 'hyunji' && password === '1234') {
        // 로그인 성공
        res.cookie('auth', true);
        res.redirect('/');
    } else {
        // 로그인 실패
        res.redirect('/login');
    }
});

app.listen(52273);