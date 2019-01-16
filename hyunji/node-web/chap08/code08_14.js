var express = require('express');
var app = express();

app.get('/index', function (req, res) {
    res.send('<h1>Index Page</h1>');
});

app.all('*', function (req, res) {
    res.status(404).send('<h1>ERROR - Page Not Found</h1>');
});

app.listen(52273);