var express = require('express');
var app = express();

app.get('/page/:id', function (req, res) {
    var name = req.params.id;
    res.send('<h1>' + name + '</h1>');
});

app.listen(52273);