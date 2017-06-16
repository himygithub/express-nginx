

//权限管理
var validatePermission =function(req,res,next){
	console.log("req.url==="+req.url);
	if(req.url=="/login" ||req.url=="/login/" ||req.url=="/users/login" ||req.url=="/users/login/"){console.log("++++++++++++++++++");
		 next();//如果请求的地址是登录则通过，进行下一个请求
	}else{
		console.log("123==req.session===="+JSON.stringify(req.session)+";;req.session.loginStatus=="+req.session.loginStatus);
		//req.session && req.session.admin    用session方式验证
		if(req.session && req.session.loginStatus){
			console.log('aaaaaaa权限管理对不同用户开放不同页面或接口');

			return next();
		}else{
			console.log("验证是否登陆req.session.loginStatus=="+req.session.loginStatus);
			// if(!req.session || !req.session.loginStatus){
				res.redirect("/login");
			// }
			// return res.send(401);
		}
	}
}
exports.validatePermission = validatePermission;



/*var authorize =function(req,res,next){
	if(req.session && req.session.admin)
		return next();
	else
		return res.send(401);
};*/
