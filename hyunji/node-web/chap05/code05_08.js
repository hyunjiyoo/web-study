// uncaughtException 이벤트 제거
var onUncaughtException = function (error) {
    console.log('예외 발생');
    process.removeListener('uncaughtException', onUncaughtException);
};

// process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', onUncaughtException);

// 예외 발생
var test = function () {
    setTimeout(test, 2000);
    error.error.error();
};
setTimeout(test, 2000);