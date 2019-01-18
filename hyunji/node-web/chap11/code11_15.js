var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
    fs.readFile('HTMLPage4.html', (err, data) => {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, () => {
    console.log('server running');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', (socket) => {
    // 방이름을 저장할 변수
    var roomName = null;
    // join 이벤트 - 클라이언트가 특정 방에 접속하게 만드는 이벤트
    socket.on('join', (data) => {
        roomName = data;
        socket.join(data);
    });
    // message 이벤트
    socket.on('message', function (data) {
        io.sockets.in(roomName).emit('message', 'test');
    });
});