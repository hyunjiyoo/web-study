var express = require('express');
var app = express();

// 라우터 생성
var routerA = express.Router();
var routerB = express.Router();

// 라우터A 설정
routerA.get('/index', function (req, res) {
    res.send('<h1>Index Page</h1>');
});

// 라우터B 설정
routerB.get('/index', function (req, res) {
    res.send('<h1>Index Page</h1>');
});

// routerA는 /a/index 경로에 페이지 생성
// routerB는 /b/index 경로에 페이지 생성
app.use('/a', routerA);
app.use('/b', routerB);

app.listen(52273);