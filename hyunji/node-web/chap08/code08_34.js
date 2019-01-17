// var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// 더미 데이터베이스 구현
var DummyDB = (function () {
    // 변수 선언
    var DummyDB = {};
    var storage = [];
    var count = 1;

    // 메서드 구현
    // 데이터 조회
    DummyDB.get = function (id) {
        if (id) {
            // 변수 가공
            id = (typeof id === 'string') ? Number(id) : id;
            // 데이터 선택
            for (var i in storage) if (storage[i].id === id) {
                return storage[i];
            }
        } else {
            return storage;
        }
    };
    // 데이터 삽입
    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };
    // 데이터 제거
    DummyDB.remove = function (id) {
        // 변수 가공
        id = (typeof id === 'string') ? Number(id) : id;
        // 제거
        for (var i in storage) if (storage[i].id === id) {
                // 데이터 제거
                storage.splice(i, 1);
                // 데이터삭제 성공
                return true;
            }
            // 데이터삭제 실패
            return false;
    };
    // 리턴합니다.
    return DummyDB;
})();

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/user', function (req, res) {
    res.send(DummyDB.get());
});

app.get('/user/:id', function (req, res) {
    res.send(DummyDB.get(req.params.id));
});

app.post('/user', function (req, res) {
    var name = req.body.name;
    var region = req.body.region;

    if (name && region) {
        res.send(DummyDB.insert({
            name: name,
            region: region
        }));
    } else {
        throw new Error('error');
    }
});

app.put('/user/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var region = req.body.region;

    // 데이터베이스 수정
    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    res.send(item);
});

app.delete('/user/:id', function (req, res) {
    res.send(DummyDB.remove(req.params.id));
});

app.listen(52273);