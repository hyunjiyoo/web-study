var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer((req, res) => {
    fs.readFile('HTMLPage.html', 'utf8', (err, data) => {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});

var io = socketio.listen(server);
io.sockets.on('connection', (socket) => {
    socket.on('message', (data) => {
        // 클라이언트의 메세지 이벤트 발생
        io.sockets.emit('message', data);
    });
});
