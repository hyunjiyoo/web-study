var http = require('http');

http.createServer(function (req, res) {
    if(req.url === '/') {
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('   <title>Forever</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('    <h1>Forever</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        // 오류 발생
        error.error.error();
    }
}).listen(52273, function () {
    console.log('server running');
});