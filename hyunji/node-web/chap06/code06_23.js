var http = require('http');
var url = require('url');

// GET 요청 매개변수 추출
http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;

    res.writeHeader(200, {'Content-Type' : 'text/html'});
    res.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(52273, function () {
    console.log('server running');
});