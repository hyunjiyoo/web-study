var http = require('http');
var fs = require('fs');
var url = require('url');

/* reqeust 객체의 url 속성 사용하면 url 모듈 사용해 pathname 추출하여 페이지 구분 */
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        fs.readFile('Index.html', function (err, data) {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (pathname === '/OtherPage') {
        fs.readFile('OtherPage.html', function (err, data) {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}).listen(52273, function () {
    console.log('server running');
});