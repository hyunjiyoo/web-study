var http = require('http');

http.createServer(function (req, res) {
    if (req.method === 'GET') {
        console.log('GET 요청');
    } else if (req.method === 'POST') {
        console.log('POST 요청');
    }
}).listen(52273, function () {
    console.log('server running');
});