/* server.close() 는 서버 종료 */
var server = require('http').createServer();

server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

var test = function () {
    server.close();
};
setTimeout(test, 10000);