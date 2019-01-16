var http = require('http');

http.createServer(function (req, res) {
    // 쿠키 있는지 확인
    if (req.headers.cookie) {
        // 쿠키 추출하고 분해
        var cookie = req.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {
                key: element[0],
                value: element[1]
            };
        });
        res.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    }
    else {
        // 쿠키 생성
        res.writeHeader(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['name = hyunjiyoo', 'region = Yongin']
        });
        res.end('<h1>쿠키생성</h1>');
    }
}).listen(52273, function () {
    console.log('server running');
});