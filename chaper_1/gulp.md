# Gulp


## 什么是Gulp

[gulp.js](http://gulpjs.com/) 是一种基于流的，代码优于配置的新一代构建工具。
	
`Gulp` 和 `Grunt` 类似。但相比于 `Grunt` 的频繁的 `IO` 操作，`Gulp` 的流操作，能更快地完成构建。


## Gulp特性

- 使用方便

通过代码优于配置的策略，`Gulp`可以让简单的任务简单，复杂的任务更可管理。

- 构建快速

通过流式操作，减少频繁的 `IO` 操作，更快地构建项目。

- 插件高质

`Gulp` 有严格的插件指导策略，确保插件能简单高质的工作。

- 易于学习

少量的API，掌握`Gulp`可以毫不费力。构建就像流管道一样，轻松加愉快。

## Gulp安装

`Gulp`是基于 `Node.js`的，故要首先安装 [Node.js](http://nodejs.org/download/)

```
	npm install -g gulp
	npm install —-save-dev gulp
```

## Gulp用法

`Gulp`的任务都是以插件的形式存在，本次示例以 [gulp-jshint](https://www.npmjs.org/package/gulp-jshint) 为例，展示`Gulp`的常规用法。

### 安装 gulp-jshint

	npm install gulp-jshint --save-dev
	
### 创建 gulpfile.js

`gulp`项目页 有一个 `Sample gulpfile`。如果不会写的话，直接参考一下就OK了。

```
var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = {
  scripts: 'js/**/*.js',
};

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
```

然后执行命令行

```
	gulp lint
```

即可。

## Gulp总结

`Gulp` 相比于 `Grunt` 有很多优点，比较直观的：就是学习曲线比较平滑。比Grunt速度更快、配置更少。

当然，`Gulp`还有很多高级的特性，详见[官方文档](https://github.com/gulpjs/gulp/tree/master/docs)

`Gulp`插件列表

	http://gulpjs.com/


