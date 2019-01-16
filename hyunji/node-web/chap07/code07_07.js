var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (req, res) {
    fs.readFile('ejsPage2.ejs', 'utf8', function (err, data) {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(ejs.render(data, {
            name: 'hyunjiyoo',
            des: 'hello world'
        }));
    });
}).listen(52273, function () {
    console.log('server running');
});