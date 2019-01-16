/* 프로그램 본체가 될 부분 */
var rint = require('./code05_15');

// 이벤트 연결
rint.timer.on('tick', function (code) {
    console.log('이벤트 실행');
});