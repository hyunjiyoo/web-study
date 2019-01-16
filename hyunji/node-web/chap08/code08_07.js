var express = require('express');
var app = express();

app.use(function (req, res) {
    // User-Agent 속성 추출
    var agent = req.header('User-Agent');
    console.log(req.headers);
    console.log(agent);

    res.sendStatus(200);
});

app.listen(52273, function () {
    console.log('server running');
});