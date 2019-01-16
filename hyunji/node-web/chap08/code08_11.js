var express = require('express');
var app = express();

// 미들웨어를 사용하는 이유
// req객체와 res객체에 속성 또는 메서드를 추가하면 다른 미들웨어에서도 사용 가능하기 때문..

app.use(function (req, res, next) {
    req.number = 52;
    res.number = 273;
    next();
});

app.use(function (req, res, next) {
    res.send('<h1>' + req.number + ':' + res.number + '</h1>');
});

app.listen(52273);