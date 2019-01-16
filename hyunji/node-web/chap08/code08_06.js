var express = require('express');
var app = express();

// 미들웨어 설정
app.use(function (req, res, next) {
    res.status(404).send('<h1>ERROR</h1>');
});

app.listen(52273, function () {
    console.log('server running');
});

