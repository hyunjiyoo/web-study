/* morgan 미들웨어 */
var express = require('express');
var morgan = require('morgan');
var app = express();

// 웹요청 들어오면 로그 출력해주는 미들웨어
app.use(morgan('combined'));

app.use(function (req, res) {
    res.send('<h1>express basic</h1>');
});

app.listen(52273);