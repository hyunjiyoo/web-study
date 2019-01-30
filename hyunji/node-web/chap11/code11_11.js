var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer((req, res) => {
    fs.readFile('HTMLPage2.html', 'utf8', (err, data) => {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, () => {
    console.log('server running');
});

var io = socketio.listen(server);
io.sockets.on('connection', (socket) => {
    // public 통신
   socket.on('publicClient', (data) => {
       io.sockets.emit('publicServer', data);
   });

    // Broadcast 통신
   socket.on('broadcastClient', (data) => {
       socket.broadcast.emit('broadcastServer', data);
   });
});