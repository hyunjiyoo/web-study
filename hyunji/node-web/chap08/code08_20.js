var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan(':method + :date'));

app.use(function (req, res) {
    res.send('<h1>express basic</h1>');
});

app.listen(52273);