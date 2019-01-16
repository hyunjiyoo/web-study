var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.method === 'GET'){
        fs.readFile('Post.html', function (err, data) {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (req.method === 'POST') {
        req.on('data', function (data) {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.end('<h1>' + data + '</h1>');
        });
    }
}).listen(52273, function () {
    console.log('server running');
});