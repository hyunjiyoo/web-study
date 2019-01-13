var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bokari1346',
    database: 'Company'
});

// 웹서버 생성
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// 전체 데이터 조회
app.get('/products', function (request, response) {
    connection.query('SELECT * FROM products', function (error, data) {
        response.send(data);
    });
});

// 개별 데이터 조회
app.get('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    connection.query('SELECT * FROM products WHERE id=?', [
        id
    ], function (error, data) {
        response.send(data);
    });
});

// 데이터 추가
app.post('/products', function (request, response) {
    var name = request.body.name;
    var modelNumber = request.body.modelNumber;
    var series = request.body.series;

    connection.query('INSERT INTO products (name, modelNumber, series) VALUES(?, ?, ?)', [
        name, modelNumber, series
    ], function (error, data) {
        response.send(data);
    });
});

// 데이터 수정
app.put('/products/:id', function (request, response) {
    var id = Number(request.params.id);
    var name = request.body.name;
    var modelNumber = request.body.modelNumber;
    var series = request.body.series;
    var query = 'UPDATE products SET ';

    // 쿼리 생성
    if (name) query += 'name="' + name + '" ';
    if (modelNumber) query += 'modelNumber="' + modelNumber + '" ';
    if (series) query += 'series="' + series + '" ';
    query = 'WHERE id=' + id;

    // 데이터베이스 요청 수행
    connection.query(query, function (error, data) {
        response.send(data);
    });
});

// 데이터 삭제
app.del('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    // 데이터베이스 요청 수행
    connection.query('DELETE FROM products WHERE id=?', [
        id
    ], function (error, data) {
        response.send(data);
    });
});

// 웹서버 실행
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});