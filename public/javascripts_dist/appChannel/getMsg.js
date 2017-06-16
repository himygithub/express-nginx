var server =require("../../../service/serverREST");
var type =server.post("http://127.0.0.1:8089/official-web/api/static/codes/idtype");
console.log("type=="+JSON.stringify(type));