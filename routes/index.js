var express = require('express');
var router = express.Router();
var permission =require('./permission');

/*权限管理对不同用户开放不同页面或接口*/
router.all('*',permission.validatePermission);
/*登录验证权限*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});

/* GET home page. */
router.get('/index/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/policyPersonal', function(req, res, next) {
  res.render('policyPersonal', { title: '个人保单查询' });
});

router.get('/modulel/test1', function(req, res, next) {
  res.render('modulel/test1', { title: 'test' });
});
/*测试请求java服务数据*/
router.get('/testAxios', function(req, res, next) {
  res.render('testAxios', { title: '测试请求java服务数据' });
});
module.exports = router;
