var http = require('http');

http.createServer(function (req, res) {
    // GET COOKIE
    var cookie = req.headers.cookie;

    // SET COOKIE
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['name = hyunjiyoo', 'region = yongin']
    });

    res.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function () {
    console.log('server running');
});