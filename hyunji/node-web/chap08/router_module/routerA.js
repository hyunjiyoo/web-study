// routerA.js 파일
var express = require('express');
var router = express.Router();

// 페이지 라우트
router.get('/index', function (req, res) {
    res.send('<h1>Index Page A</h1>');
});

// 외부로 뺀다
exports.router = router