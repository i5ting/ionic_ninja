Chapter 1：getting started
===========

getting started翻译过来的意思是入门，也就是假设你对它一无所知的时候，从头开学的地方。

http://ionicframework.com/getting-started/


## 欢迎新同学

![](img/0.png)

```
Start building with Ionic!
Follow these quick steps and start building high quality mobile apps in minutes. For a more indepth overview, watch our Crash Course video, which covers everything else you'd want to know.
```

这是一段概述，告诉你说接下来我们做什么，如何快速入门，如果你想找更高级的道路，给出方向。


## 探索着过河

### 如何安装ionic

![](img/1.png)

其实就一个命令

	npm install -g cordova ionic
	
但是你真的懂么？


- 什么是npm么？
- 了解npm依赖node么
- 知道`-g`代表什么意思么？

如果知道跳过下一章节

首先要知道nom的全称是node package manager,从字面意思很明显就知道它是nodes的包管理器。那么你肯定需要安装nodejs了，文中有链接自行下载


![](img/2.png)


![](img/3.png)

## 以后的路要考自己了
![](img/4.png)



## 开始ionic

### 创建Side Menu项目

	ionic start demo sidemenu
	ionic platform add ios
	ionic build ios
	ionic emulate ios


js/angular/main.js

```
var IonicModule = angular.module('ionic', ['ngAnimate', 'ngSanitize', 'ui.router']),
  extend = angular.extend,
  forEach = angular.forEach,
  isDefined = angular.isDefined,
  isString = angular.isString,
  jqLite = angular.element;
```

define $ionicNavBar

```
IonicModule
.controller('$ionicNavBar', [
  '$scope',
  '$element',
  '$attrs',
  '$ionicViewService',
  '$animate',
  '$compile',
  '$ionicNavBarDelegate',
function($scope, $element, $attrs, $ionicViewService, $animate, $compile, $ionicNavBarDelegate) {
  //Let the parent know about our controller too so that children of
  //sibling content elements can know about us
  $element.parent().data('$ionNavBarController', this);
```


### 启动web服务器,在浏览器中调试

```
➜  sidemenu git:(master) ✗ ionic serve
Running serve task...
Running dev server at http://0.0.0.0:8100
Running live reload server at http://0.0.0.0:35729
Changed www/js/controllers.js
Changed www/js/controllers.js
Changed www/lib/ionic/js/ionic.bundle.js
```

这里要注意阅读日志信息 

- Running dev server at http://0.0.0.0:8100
- Running live reload server at http://0.0.0.0:35729

解释

- dev server就是普通的http服务器
- live reload server是只要代码变动就好自动刷新浏览器页面的服务

如果你用了很久都不清楚这东西是干嘛我觉得你是不合格的开发。

注意执行`ionic serve`命令的时候会直接打开浏览器的

这原理很简单，可以看一下`http-server`

	http-server . -p 8090 --cors  -o
	
### 分析一下生命周期


