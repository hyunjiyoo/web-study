var fs = require('fs');

fs.readFile('textfile.txt', 'utf8', function (err, data) {
    console.log(data);
});

var data = 'Hello world..!';
// 비동기 파일쓰기
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (err) {
    console.log('WRITE FILE ASYNC COMPLETE');
});
// 동기 파일쓰기
fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE TILE SYNC COMPLETE');