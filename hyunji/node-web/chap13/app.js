var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var express = require('express');

// 생성자 함수 선언
var counter = 0;
function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// 변수 선언
var products = [
    new Product('JavaScript', 'chrome.png', 28000, 30),
    new Product('Jquery', 'chrome.png', 28000, 30),
    new Product('Node.js', 'chrome.png', 32000, 30),
    new Product('Socket.io', 'chrome.png', 17000, 30),
    new Product('Connect', 'chrome.png', 18000, 30),
    new Product('Express', 'chrome.png', 31000, 30),
    new Product('EJS', 'chrome.png', 12000, 30)
];

// 웹서버 생성
var app = express();
var server = http.createServer(app);

// 웹서버 설정
app.use(express.static(__dirname + '/public'));

// 라우트 수행
app.get('/', (req, res) => {
    // HTMLPage.html 읽음
    var htmlPage = fs.readFileSync('HTMLPage.html', 'utf8');

    // 응답
    res.send(ejs.render(htmlPage, {
        products: products
    }));
});

// 웹서버 실행
server.listen(52273, () => {
   console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var io = require('socket.io').listen(server);
io.sockets.on('connection', (socket) => {
   function onReturn(index) {
       // 물건 개수 증가
       products[index].count++;
       // 타이머 제거
       clearTimeout(cart[index].timerID);
       // 카트에서 물건 제거
       delete cart[index];
       // count 이벤트 발생
       io.sockets.emit('count', {
           index: index,
           count: products[index].count
       });
   }

   // 변수 선언
    var cart = {};

    // cart 이벤트
    socket.on('cart', (index) => {
        // 물건 개수 감소
        products[index].count--;

        // 카트에 물건을 넣고 타이머 시작
        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(() => {
            onReturn(index);
        }, 10 * 60 * 1000);

        // count 이벤트 발생
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    // buy 이벤트
    socket.on('buy', (index) => {
        // 타이머 제거
        clearTimeout(cart[index].timerID);
        // 카트에서 물건 제거
        delete cart[index];
        // count 이벤트 발생
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    // return 이벤트
    socket.on('return', (index) => {
       onReturn(index);
    });
});