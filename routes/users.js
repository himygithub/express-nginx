var express = require('express');
var loginServer =require('../service/login');
var router = express.Router();
var getOtherData =require('../service/getOtherData');
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//权限管理
var authorize =function(req,res,next){
	if(req.session && req.session.admin)
		return next();
	else
		return res.send(401);
};*/

//REST API 路由
/*app.all('/api',authorize);
app.get('/api/test'router.test.list);
app.post('/api/test',router.test.add);
app.put('/api/test/:id',router.test.edit);
app.del('/api/test/:id',router.test.del);*/
/*登录验证权限*/
router.post('/login',loginServer.authenticate);

router.post("/official-web/api/static/codes/idtype",getOtherData.getIdtype);

module.exports = router;
