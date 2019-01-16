/* emit() 이벤트 강제 발생 */
process.on('exit', function (code) {
    console.log('안녕히 계세요..!'); // 6
});

// 이벤트 강제 발생 || emit() : 이벤트리스너만 실행.
process.emit('exit'); // 1
process.emit('exit'); // 2
process.emit('exit'); // 3
process.emit('exit'); // 4

// 프로그램 실행 중
console.log('프로그램 실행중'); // 5

// exit 이벤트를 강제로 호출해도 프로그램이 종료되지 않습니다.
// emit() 메서드는 이벤트리스너만 실행!!