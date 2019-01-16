var express = require('express');
var app = express();

app.use(function (req, res) {
    var agent = req.header('user-agent');

    // 브라우저 구분하여 출력
    if (agent.toLowerCase().match(/chrome/)) {
        res.send('<h1>Hello chrome</h1>');
    } else {
       res.send('<h1>Hello express</h1>');
    }
});

app.listen(52273, function () {
    console.log('server running');
});