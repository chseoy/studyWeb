var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 로그인 페이지
router.get('/login', function (req, res) {
  res.render('index', {title:'로그인', pageName:'users/login.ejs'}) // 페이지 이동 (pageName 이름은 인덱스.ejs에 선언된 거랑 같아야함.)
});

// 회원가입 페이지
router.get('/join', function (req, res) {
  res.render('index', {title:'회원가입', pageName:'users/join.ejs'}) // 페이지 이동 (pageName 이름은 login.ejs에 선언된 거랑 같아야함.)
});
module.exports = router;
