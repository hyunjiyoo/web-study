var fs = require('fs');

// 동기식 예외처리 try ~ catch
try {
    var data = fs.readFileSync('textfile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}
try {
    fs.writeFileSync('textfile.txt', 'Hello world..!', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch(e) {
    console.log(e);
}

// 비동기식 메서드 예외처리
fs.readFile('textfile.txt', 'utf8', function (err, data) {
    if(err)
        console.log(err);
    else
        console.log(data);
});
fs.writeFile('textfile.txt', 'Hello world..!', 'utf8', function (err) {
    if(err)
        consoel.log(err);
    else
        console.log('FILE WRITE COMPLETE');
});