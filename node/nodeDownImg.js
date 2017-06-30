//爬爬墨迹天气的天气小图标，懒的自己找，并保存在指定文件夹
var http = require('http');
var cheerio = require('cheerio');
var querystring = require('querystring');
var fs = require('fs');

http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain;charset=utf-8'
	});
	for(var i = 0; i < 1000; i++) {
		getImg(i);
	}
	response.end("爬图结束");
}).listen(2000);
console.log("爬图启动");

function getImg(i) {
	var url = 'http://cdn.moji.com/mtianqi/assets/images/wea/w' + i + '.png';
	http.get(url, function(res) {
		var imgData = "";
		res.setEncoding("binary");
		res.on("data", function(chunk) {
			imgData += chunk;
		});
		res.on("end", function() {
			fs.writeFile("./weatherimg/w" + i + ".png", imgData, "binary", function(err) {
				if(err) {
					console.log("第" + i + "down fail");
				}
				console.log("第" + i + "down success");
			})
		})
	})
}