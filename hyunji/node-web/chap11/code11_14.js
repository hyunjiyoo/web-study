var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer((req, res) => {
    fs.readFile('HTMLPage3.html', 'utf8', (err, data) => {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, () => {
    console.log('server running');
});

var id = 0;
var io = socketio.listen(server);

// private 통신
io.sockets.on('connection', (socket) => {
    // id 설정
    id = socket.id;
    socket.on('privateServer', (data) => {
        io.sockets.to(id).emit('privateClient', data);
    });
});
