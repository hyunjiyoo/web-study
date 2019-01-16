var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(404);
    res.end();
}).listen(52273, function () {
    console.log('server running');
});