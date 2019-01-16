/* Node.js에서 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속 받는다.
   EventEmitter 객체는 process 객체 안에 있는 생성자 함수로 생성할 수 있는 객체이다. */

var custom = new process.EventEmitter();

// 이벤트 연결
custom.on('tick', function (code) {
    console.log('이벤트 실행');
});
// 이벤트 강제 발생
custom.emit('tick');