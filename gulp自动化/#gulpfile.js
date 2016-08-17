/*
	使用gulp构建自动化操作
		1）sass编译
 */

//引入gulp包
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 新建任务，用来编译sass源文件
gulp.task('buildSass',function(){

	// 找到sass源文件
	gulp.src('./src/sass/*.scss')

		// 编译sass源文件
		.pipe(sass({outputStyle:'nested'}))

		// 输出到指定目录
		.pipe(gulp.dest('./src/css'))

		// 浏览器自动刷新
		.pipe(reload({stream:true}))
});

gulp.task('autoBuild',function(){
	// 创建一个静态服务器
	// server:指定服务器根目录
	browserSync({
        server: "./src"
    });

	// 监听文件改变，并执行相应的任务
	// 监听sass源码有没有修改，如果有，执行buildSass任务
	gulp.watch('./src/sass/*.scss',['buildSass']);

	// 当html文档有修改时，执行reload方法
	gulp.watch('./src/*.html').on('change', reload);
});

gulp.task('default',function(){
	console.log('哈哈')
});

gulp.task('test',function(){
	gulp.src('./src/sass/test.scss')
	// 编译sass源文件
		.pipe(sass())

		// 输出到指定目录
		.pipe(gulp.dest('./src/css'))
})