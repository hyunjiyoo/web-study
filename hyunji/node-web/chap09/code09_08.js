var fs = require('fs');
var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'Company2'
});

// 서버 생성
var app = express();
app.use(bodyParser.urlencoded({extended:false}));

// 서버 실행
app.listen(52273, function () {
    console.log('Server Running..');
});

// 라우트 수행
app.get('/', function (req, res) {
    fs.readFile('list.html', 'utf8', function (err, data) {
       client.query('SELECT * FROM products', function (err, results) {
           res.send(ejs.render(data, {
               data: results
           }));
       }) ;
    });
});

app.get('/delete/:id', function (req, res) {
    client.query('DELETE FROM products WHERE id=?', [req.params.id], function () {
        res.redirect('/');
    });
});

app.get('/insert', function (req, res) {
    fs.readFile('insert.html', 'utf8', function (err, data) {
        res.send(data);
    });
});

app.post('/insert', function (req, res) {
    var body = req.body;

    client.query('INSERT INTO products (name, modelnumber, series) VALUES(?,?,?)', [
        body.name, body.modelnumber, body.series
    ], function () {
        res.redirect('/');
    });
});

app.get('/edit/:id', function (req, res) {
    fs.readFile('edit.html', 'utf8', function (err, data) {
        client.query('SELECT * FROM products WHERE id=?', [
            req.params.id
        ], function (err, result) {
            res.send(ejs.render(data, {
                data: result[0]
            }));
        });
    });
});

app.post('/edit/:id', function (req, res) {
    var body = req.body;

    client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [
        body.name, body.modelnumber, body.series, req.params.id
    ], function () {
        res.redirect('/');
    });
});