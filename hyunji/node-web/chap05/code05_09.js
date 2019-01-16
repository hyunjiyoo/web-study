/* once() 메서드 : 이벤트 리스너를 한번만 연결 */
process.once('uncaughtException', function (error) {
    console.log('예외 발생');
});

// 예외 발생
var test = function () {
    setTimeout(test, 2000);
    error.error.error();
};
setTimeout(test, 2000);