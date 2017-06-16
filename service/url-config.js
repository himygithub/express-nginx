//开发环境
let isProd = 'uat';

exports.isProd = isProd

exports.api = isProd == 'uat' ? 'http://127.0.0.1:3000/' : 'https://www.baidu.com' ;

//生产环境
exports.serverPort = 8080;



let proxy = {
  protocol: isProd =='sit1' ? 'https://' : 'http://',
  host: isProd =='sit1' ? 'www' : 'localhost',
  port: isProd =='sit1' ? '' : exports.serverPort
}
exports.proxy = proxy;

exports.proxyApi = proxy.protocol + proxy.host + `${proxy.port ? ':' + proxy.port : ''}` + '/';

exports.serverOne ="http://127.0.0.1:8089/";

//mongodb  
let dburl ="127.0.0.1";
let dbport ="27017";
let database ="test";
exports.dbconfig =dburl+":"+dbport+"/"+database;

