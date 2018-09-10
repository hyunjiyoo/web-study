// 모듈 추출
var express = require('express');
var bodyParser = require('body-parser');

// 변수 선언
var items = [{
    name: '우유',
    price: '2000'
}, {
    name: '홍차',
    price: '5000'
}, {
    name: '커피',
    price: '5000'
}];

var app = express();
app.use(express.static('public'));

// 데이터 조회
app.get('/products', function (request, response) {
    response.send(items);
});

// 개별 데이터 조회
app.get('/products/:id', function (request, response) {
    // request.params() 메서드로 데이터 추출하면 문자열 나오므로 Number()로 숫자 변환
    var id = Number(request.params.id);

    // 클라이언트가 숫자가 아닌값을 입력했거나 숫자를 입력했는데 데이터가 없을 경우
    if (isNaN(id)) {
        // 숫자가 아닌 값 입력
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상
        response.send(items[id]);
    } else {
        // 데이터가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

// 데이터 추가
app.post('/products', function (request, response) {
    var name = request.body.name;
    var price = request.body.price;
    var item = {
        name: name,
        price: price
    };

    // 데이터 추가
    items.push(item);

    // 응답
    response.send({
        message: '데이터를 추가했습니다.',
        data: item
    });
});

// 데이터 수정
app.put('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.params.id);
    var name = request.body.name;
    var price = request.body.price;

    if (items[id]) {
        // 데이터를 수정합니다.
        if (name) { items[id].name = name; }
        if (price) { items[id].price = price; }

        // 응답합니다.
        response.send({
            message: '데이터를 수정했습니다.',
            data: items[id]
        });
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

// 데이터 삭제
app.del('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.params.id);

    if (isNaN(id)) {
        // 오류: 잘못된 경로
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상: 데이터 삭제
        items.splice(id, 1);
        response.send({
            message: '데이터를 삭제했습니다.'
        });
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: ' 존재하지 않는 데이터입니다!'
        });
    }
});

// urlencoded() 메서드 - 일반적인 URL 인코딩 요청으로 오는 데이터를 자동으로 분해해주는 함수 리턴.
app.use(bodyParser.urlencoded({ extended: false }));

// 웹 서버 실행
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});