//nodejs读写文件模块
var fs = require('fs');

var readPath = './file.txt';

//异步读取,通过callback函数回调数据
var data = fs.readFile(readPath,'utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
//同步读取
//var data = fs.readFileSync(readPath,'utf-8');
//console.log(data);


//写入
var writestream = fs.createWriteStream('file2.txt');
var content="写入test";
writestream.write(content);
