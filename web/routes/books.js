var express = require('express');
var router = express.Router();

/* 도서검색 page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '도서검색', pageName: 'books/search.ejs' }); // 웹 페이지 index를 렌더링 하겠다.
});

/* 장바구니 page. */
router.get('/cart', function(req, res, next) {
    res.render('index', { title: '도서검색', pageName: 'books/cart.ejs' }); // 웹 페이지 index를 렌더링 하겠다.
});

module.exports = router;
