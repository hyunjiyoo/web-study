var express = require('express');
var app = express();

// 이벤트 리스너 설정
app.use(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello express</h1>');
});
// 서버 실행
app.listen(52273, function () {
    console.log('server running');
});