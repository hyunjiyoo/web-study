var fs = require('fs');
var http = require('http');

// 52273번 포트에 서버생성하고 실행 - 이미지파일
http.createServer(function (req, res) {
    fs.readFile('lena.png', function (err, data) {
        res.writeHeader(200, {'Content-Type': 'image/png'});
        res.end(data);
    });
}).listen(52273, function () {
    console.log('서버:52273');
});

// 52274번 포트에 서버생성하고 실행 - mp3파일
http.createServer(function (req, res) {
    fs.readFile('sample.mp3', function (err, data) {
        res.writeHeader(200, {'Content-Type': 'audio/mp3'});
        res.end(data);
    });
}).listen(52274, function () {
    console.log('서버:52274');
});