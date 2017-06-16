var dao =require("./daoREST");
var urlConfig =require("./url-config");

function getUrl () {
  return urlConfig.serverOne;
}
function getIdtype(req ,res ,next){
	var url =getUrl()+"official-web/api/static/codes/idtype";

	dao.get(url,{},res);//因为post不允许访问静态资源（405），所以改成get。

	// res.json(resulte);
}
exports.getIdtype =getIdtype;