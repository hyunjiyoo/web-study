var http = require('http');

http.createServer(function (req, res) {
   // 쿠키 입력
   res.writeHeader(200, {
       'Content-Type': 'text/html',
       'Set-Cookie': [
           'breakfast = toast; Expires=' + date.toUTCString(),
           'dinner = chicken'
       ]
   });
   // 쿠키 출력
    res.end('<h1>' + req.headers.cookie + '</h1>');
}).listen(52273, function () {
    console.log('server running');
});