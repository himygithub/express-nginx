var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var mongodb =require("./mongodb");
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('tests');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//跳到登陆页面
var login =function(req,res,next){
	res.render('/login');
}
exports.login =login;

//退出登陆
var logout =function(req,res,next){
	req.session.destroy();
	res.redirect('/login');//重定向
}

//重置会话，删除并创建新的req.session
var reSetLogin =function(req,res,next){
	req.session.regenerate();
	res.redirect('/login');//重定向
}

exports.logout =logout;

var authenticate =function(req ,res ,next){
	console.log("authenticate="+req.body.name);
	if(!req.body.name || !req.body.password){
		return res.render("login",{
			error:"please enter your email and password"
		});
	}
	//连接数据库验证用户
	var users ={"name":req.body.name,"password":req.body.password};

	//------------------------------------------------------------
	//测试链接的哪个集合
/*	new TodoModel({ //实例化对象，新建数据
        name: "wangjun",
        password: "123"
    }).save(function(err, todo, count) { //保存数据
        console.log('success ---内容', todo, 'sum数量', count); //打印保存的数据
    });*/

	//-------------------------------------------------------------

	TodoModel.findOne(users).exec(function(err, data, count) {
        console.log("find result ==="+JSON.stringify(data));
        if(data && data._id){
        	console.log("ta mei you xiao hui");

			req.session.user =req.body.name;
			req.session.loginStatus =true;
			req.session.user_db_id =data._id;

			var resultObj ={res:"ok"};
			console.log("login success...");
			res.json(resultObj);
        }
    });

	
}
exports.authenticate =authenticate;