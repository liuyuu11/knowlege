//1.引包
var gulp = require('gulp');
var concat = require('gulp-concat');
var jsmin = require('gulp-uglify');
var rename = require('gulp-rename');


// 2.创建任务
gulp.task('concatJS',function(){
	return gulp.src('./src/js/*.js')

		//把所有匹配到的js文件合并成index.js
		.pipe(concat('index.js'))

		
		// 输出到相应文件夹
		.pipe(gulp.dest('./dist/js'))

		// 压缩合并后的文件
		.pipe(jsmin({mangle:false}))

		// 改名
		.pipe(rename({suffix: "-min"}))

		// 输出到相应文件夹
		.pipe(gulp.dest('./dist/js'))

});

//3.执行任务
//在命令行执行gulp <任务名>