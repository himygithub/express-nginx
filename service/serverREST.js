var dao =require("./daoREST");
var urlConfig =require("./url-config");

module.exports = {
  list (url,currentPage, pageSize, params) {
    return dao.page(url, currentPage, pageSize, params)
  },
  get (url,data,res) {
    return dao.get(url,data,res)
  },
  getRender (url,data,res) {
    return dao.get(apiConfig.proxyApi + url,data,res)
  },
  allNames (res) {
    return dao.get('article/article-map',{},res)
  },
  listAll (res) {
    return dao.get('article/list-all',{},res)
  },
  post (url,data,res){
    console.log("====post url:"+url+"=====");
  	return dao.post(url,data,res);
  }
}

/***改用axios**/
/*export default {
  var root =urlConfig.proxyApi
  list (url,currentPage, pageSize, params) {
  	var options ={
  		proxy_url:root+url,
  		method:"get",
  		datas:params,
  		currentPage:currentPage,
  		pageSize:pageSize
  	};
    return daoREST.RTS(options,true);
  },
  get (url) {
  	var options ={
  		proxy_url:root+ url,
  		method:"get"
  	};
    return daoREST.RTS(options)
  },
  post (url,params) {
  	var options ={
  		proxy_url:root+url,
  		method:"post",
  		datas:params
  	};
    return daoREST.RTS(options)
  }
}*/