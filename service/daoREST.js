var axios =require("axios");
var urlConfig =require("./url-config");

var request = require('request');

const root =urlConfig.proxyApi;

function getUrl (path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path
  } else {
    return root + path
  }
}
//返回结果
function proessData (response, e) {
  let result = response.data
  if (result) {
    return result;
  }
  console.log('basedao error: ', result, e)
  throw result || e
}

//序列化
function serialize (data = {}) {
  let dataStr = []
  Object.keys(data).forEach(k => {
    let value = data[k]
    if (value !== null && value !== undefined) {
      dataStr.push(`${k}=${encodeURI(value)}`)
    }
  })
  return dataStr.join('&')
}

function get (path, data,res) {
  let url = getUrl(path)
  var proxy_url =url + '?' + serialize(data);
  //return axios.get(proxy_url).then(proessData);
  
  return sendRequest({method:"GET",proxy_url:proxy_url},res);
}

function post (path, data,res) {
  let url = getUrl(path)

  return sendRequest({method:"POST",proxy_url:url,datas:data},res);
}

function page (path, currentPage = 1, pageSize = 10, data = {},res) {
  data.currentPage = currentPage
  data.pageSize = pageSize
  return get(path, data,res)
}
//request请求封装
function sendRequest(option,res){
  var method = option.method ||"GET";
  var datas =option.datas||{};

  var options = {
        url: option.proxy_url,
        method: method,
        json: true
  };

  //post请求
  if(method == "POST"){
    options.data = datas;

  }


  function callback(error, response, data) {
      console.log("==error:"+JSON.stringify(error)+"==response:"+JSON.stringify(response)+"==data:"+JSON.stringify(data));
      if (!error && response.statusCode == 200) {
          console.log('------接口数据------',data);

          res.json(data);
      }else{
        res.json({statusCode:response.statusCode,error:error});
      }
  }
  
  request(options, callback);
}

module.exports.get =get;
module.exports.post =post;
module.exports.page =page;
