//nodejs调用图灵机器人接口demo
var http = require('http');
//依赖querystring包
var querystring = require('querystring');

http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain;charset=utf-8"
	});
	//querystring.stringify(obj,[sep],[eq])obj必须为对象，other:querystring.parse(str),str=>obj，querystring.escape=>转码.unescape=>解码
	var keyword = "姚明";
	var info = querystring.stringify({info:keyword});
	console.log(keyword);
	var urlstring = "http://www.tuling123.com/openapi/api?key=d3aa5dfb76b44711acfa132c6d712165&"+info;
	http.get(urlstring, function(res) {
		var data = "";
		res.on("data", function(chunk) {
			data += chunk;
		})
		res.on("end",function(){
			/*response.write(data);*/
			response.end(data);
		})
	})
}).listen(3000);

console.log("3000port启动")