/* static 미들웨어 */
var express = require('express');
var app = express();

// 미들웨어 설정
app.use(express.static(__dirname + '/public'));

// 응답
app.use(function (req, res) {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.end('<img src="/lena.png" width="100%" />');
});

app.listen(52273);