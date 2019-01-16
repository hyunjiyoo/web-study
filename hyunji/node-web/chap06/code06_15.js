var http = require('http');

// 페이지 강제 이동
http.createServer(function (req, res) {
    res.writeHeader(302, { 'Location' : 'http://www.hanbit.co.kr' });
    res.end();
}).listen(52273, function () {
    console.log('server running');
});