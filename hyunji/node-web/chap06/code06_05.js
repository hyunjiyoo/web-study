var http = require('http');

http.createServer(function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});