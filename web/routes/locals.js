var express = require('express');
var router = express.Router();

/* 지역검색 페이지. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '지역검색', pageName:'locals/search.ejs' });
});

router.get('/favorite', function(req, res, next) {
    res.render('index', { title: '지역검색', pageName: 'locals/favorite.ejs' }); // 웹 페이지 index를 렌더링 하겠다.
});
module.exports = router;
