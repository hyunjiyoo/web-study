var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');
var app = express();

// 미들웨어 설정
// uploadDir 속성 지정하면 사용자가 파일 업로드했을 때 지정된 경로로 파일 업로드
app.use(multipart({ uploadDir: __dirname + '/multipart' }));

// 라우터 설정
app.get('/', function (req, res) {
    fs.readFile('HTMLPage.html', function (err, data) {
        res.send(data.toString());
    });
});

app.post('/', function (req, res) {
    console.log(req.body);
    console.log(req.files);

    var comment = req.body.comment;
    var imageFile = req.files.image;

    if(imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        // 이미지 파일 확인
        if (type.indexOf('image') != -1) {
            // 이미지파일의 경우: 파일 이름 변경
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (err) {
                res.redirect('/');
            });
        } else {
            // 이미지파일이 아닌 경우: 파일 제거
            fs.unlink(path, function (err) {
                res.sendStatus(400);
            });
        }
    }
});

app.listen(52273);