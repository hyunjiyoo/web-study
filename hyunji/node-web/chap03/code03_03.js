/* 프로그램 실행 시간 측정 */

// 시간 측정을 시작합니다.
console.time('alpha');

var output = 1;
for (var i = 1; i <= 10; i++) {
    output *= i;
}
console.log('Result:', output);

// 시간측정을 종료합니다.
console.timeEnd('alpha');