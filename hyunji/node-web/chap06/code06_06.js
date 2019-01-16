var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('code06_08.html', function (err, data) {
        res.writeHeader(200, {'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(52273, function () {
    console.log('서버실행');
});