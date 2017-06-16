var mongoose = require("mongoose"); //引入mongoose
let urlConfig = require("./url-config");

///===    监听  开始   ===//
var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
});
///===    监听  结束   ===//

///===    Schema、model  开始   ===//

var TodoSchema = new mongoose.Schema({
    "name":String,
	"password":String
});

mongoose.model('tests', TodoSchema); //将该Schema发布为Model
///===    Schema、model  结束   ===//

let dbUrl ="mongodb://"+urlConfig.dbconfig;
mongoose.connect(dbUrl); //连接到mongoDB的todo数据库
//该地址格式：mongodb://[username:password@]host:port/database[?options]
//默认port为27017  
module.exports = mongoose;



/*let urlConfig = require("./url-config");
const mongoose =require("mongoose");
const Schema =mongoose.Schema;
let userMode =require("../dbmodel/userModel");

let dbUrl ="mongodb://"+urlConfig.dbconfig;
// let dbUrl ="mongodb://localhost/test";

let connectDB =function(){
	console.log("connect database...");
	mongoose.connect(dbUrl);
	const db =mongoose.connection;
	db.on("error",console.error.bind(console,"========mongoDB connect error==========="));
	db.once("open",(callback)=>{
		console.log("======mongoDB connect success=======");
	})
}

let dbfindOne =function(classModel,usersObj,callback){
	classModel.findOne(usersObj,function(err,doc){
		if(err){
			console.log("=====err:"+err);
			callback({"error":err});
			
		}else{
			console.log("=====result:"+JSON.stringify(doc));
			callback({"result":doc});

		}

	})
}

let dblogin =function(usersObj,callback){
	/*connectDB();
	//查询登录数据
	const classSchema =new mongoose.Schema(userMode.loginSchema);
	const classModel =mongoose.model("classModel",classSchema);
	
	console.log("=====dbfindOne=usersObj==="+JSON.stringify(usersObj));
	dbfindOne(classModel,usersObj,callback);*/
/*	console.log("------start mongoose----------")
	var userSchema =new mongoose.Schema({
		"name":String,
		"password":String
	})

	var userModel =mongoose.model("test",userSchema)
	userModel.findOne({"name":"pengkun","password":"123"},function(err,doc){
		if(err){
			console.log("----mongoose error---:"+err);
		}else{
			console.log("----mongoose success---doc==--:"+JSON.stringify(doc));
		}
	})

}

exports.dblogin =dblogin;*/