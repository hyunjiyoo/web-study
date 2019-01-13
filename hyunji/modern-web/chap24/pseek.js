var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bokari1346',
    database: 'PSEEK'
});

var app = express();

// 작품테이블 조회
app.get('/artwork', function (request, response) {
    connection.query('SELECT * FROM artwork', function (error, data) {
        response.send(data);
    });
});

// 개별 작품 조회 (동적라우트 적용시키기위해 식별자(id값)를 request.params 객체에서 추출.
app.get('/artwork/:id', function (request, response) {
    var id = Number(request.params.id);
    connection.query('SELECT * FROM artwork WHERE id=?', [
        id
    ], function (error, data) {
        response.send(data);
    });
});

// 작품테이블에서 top100 차트 나타낼때 상위 데이터 나타내고자 할 때 LIMIT 명령어 사용.
app.get('/artchart', function (request, response) {
    connection.query('SELECT * FROM artwork LIMIT 2', function (error, data) {
        response.send(data);
    });
});

// 사용자테이블 조회
app.get('/user', function (request, response) {
    connection.query('SELECT * FROM user', function (error, data) {
        response.send(data);
    });
});

// 사용자별 데이터 조회
app.get('/user/:id', function (request, response) {
    var id = Number(request.params.id);

    connection.query('SELECT * FROM user WHERE id=?', [
        id
    ], function (error, data) {
        response.send(data);
    });
});

// 사용자별 작품 조회
app.get('/user_artwork', function (request, response) {
    var sql = 'SELECT artname, user.name, description, genre, created FROM artwork LEFT JOIN user ON artwork.userId WHERE artwork.userId = user.id;';
    connection.query(sql, function (error, data) {
        response.send(data);
    });
});

app.listen(65000, function () {
    console.log('Server Running at http://127.0.0.1:65000');
});