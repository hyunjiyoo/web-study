/* 이벤트 생성 모듈 파일 */
exports.timer = new process.EventEmitter();

// 이벤트 강제 발생
setInterval(function () {
    exports.timer.emit('tick');
}, 1000);