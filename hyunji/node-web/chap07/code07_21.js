var http = require('http');

http.createServer(function (req, res) {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.end('<h1>Test - File222</h1>');
}).listen(52273, function () {
    console.log('server running');
});