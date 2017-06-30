npm init 初始并且创建一个package.json,很有用的文档，方便把包依赖包括版本放在这里，项目拉下来用npm install就能自动根据json安装包
npm install express (--svae可选)安装express没啥好说的,--save是否添加到package.json中去
npm install express-generator -g express应用生成工具
express (your app's name) 创建了一个xx应用，这里简易加-e（即使用ejs），默认是jade（这个比较不直观，不太符合普遍的前端coder，但写惯了后台转前端的会更加适应），ejs和jade可以自行百度对比选择
cd xx & npm install 进入xx应用并且安装依赖
set debug = xx & npm start 启动，你喜欢的话直接npm start 也能启动或者node /bin/www 
