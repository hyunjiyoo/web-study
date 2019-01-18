var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer((req, res) => {
    fs.readFile('HTMLPage.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, () => {
    console.log('server running');
});

var io = socketio.listen(server);
io.sockets.on('connection', (socket) => {
    // solteee 이벤트
    socket.on('solteee', (data) => {
        // 클라이언트가 전송한 데이터 출력
        console.log('Client Send Data: ', data);

        // 클라이언트에 smart 이벤트 발생
        socket.emit('smart', data);
    })
});