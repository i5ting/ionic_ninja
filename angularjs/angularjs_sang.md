# 精通使用AngularJS开发Web App

https://github.com/angular/angular-seed



## 使用angular-seed作为项目模板

命令如下：

	git clone https://github.com/angular/angular-seed.git
	npm install 
	npm start

访问地址http://127.0.0.1:8000/app


## 最简单的入门

### 最精简

index.html

	<html ng-app>
	    <head>
	        <script src="js/angular/angular.min.js"></script>
	    </head>
	    <body>
	        Hello {{'World'}}!
	    </body>
	</html>

请在您的浏览器中运行以上代码查看效果。

现在让我们仔细看看代码，看看到底怎么回事。 当加载该页时，标记ng-app告诉AngularJS处理整个HTML页并引导应用：

	<html ng-app>
	
这行载入AngularJS脚本：

	<script src="http://code.angularjs.org/angular-1.0.1.min.js"></script>


（想了解AngularJS处理整个HTML页的细节，请看Bootstrap。）

最后，标签中的正文是应用的模板，在UI中显示我们的问候语：

	Hello {{'World'}}!
	
注意，使用双大括号标记`{{}}`的内容是问候语中绑定的表达式，这个表达式是一个简单的字符串‘World’。


### 错误的方式

	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
	    <title>demo</title>
	    <script src="js/angular/angular.min.js"></script>

	  </head>
	  <script>

	  </script>
	  <body ng-app="myapp">
	      <div ng-controller="Ctrl">
	          <p>{{variable}}</p>
	      </div>    
	  </body>
	</html>

不能这样写，不然会报错"Uncaught object angular.js:36"

https://www.google.com.hk/search?q=Uncaught+object+angular.js%3A36&oq=Uncaught+object+angular.js%3A36&aqs=chrome..69i57.1165j0j7&sourceid=chrome&es_sm=119&ie=UTF-8

没有声明对应的myapp模块，所以会报错。

### 正确的方式

index1.html

	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
	    <title>demo</title>
		<script src="js/angular/angular.min.js"></script>
		<script>
			var app = angular.module('myapp', []);

			app.controller('Ctrl', function($scope){
				$scope.variable = "Hello";
			});
		</script>
	   </head>
	  <body ng-app="myapp">
	      <div ng-controller="Ctrl">
	          <p>{{variable}}</p>
	      </div>    
	  </body>
	</html>

下面，让我们看一个更有趣的例子：使用AngularJS对我们的问候语文本绑定一个动态表达式。

## 双向绑定

本示例演示AngularJS的双向数据绑定（bi-directional data binding）：

- 编辑前面创建的ionic_ninja/angularjs/examples/data-binding.html文档。
- 将下面的源代码复制到您的HTML文件。
- 刷新浏览器窗口。

源代码

	<!doctype html>
	<html ng-app>
	    <head>
	        <script src="js/angular/angular.min.js"></script>
	    </head>
	    <body>
	        Your name: <input type="text" ng-model="yourname" placeholder="World">
	        <hr>
	        Hello {{yourname || 'World'}}!
	    </body>
	</html>
	
请在您的浏览器中运行以上代码查看效果。

该示例有一下几点重要的注意事项：

- 文本输入指令`<input ng-model="yourname" />`绑定到一个叫yourname的模型变量。
- 双大括号标记将`yourname`模型变量添加到问候语文本。
- 你不需要为该应用另外注册一个事件侦听器或添加事件处理程序！

现在试着在输入框中键入您的名称，您键入的名称将立即更新显示在问候语中。 这就是AngularJS双向数据绑定的概念。输入框的任何更改会立即反映到模型变量（一个方向），模型变量的任何更改都会立即反映到问候语文本中（另一方向）。

### 前绑定

即页面里的值可以传给controller，以本例来讲

	<input type="text" ng-model="yourname" placeholder="World">
	
这里`ng-model`便是前绑定地方。输入框里的值会赋值给`yourname`

### 前初始化

	<!doctype html>
	<html ng-app='myapp'>
	    <head>
	        <script src="js/angular/angular.min.js"></script>
			<script>
				var app = angular.module('myapp', []);

				app.controller('Ctrl', function($scope){
					// 初始化yourname属性
					$scope.yourname = "World";
				});
			</script>
	    </head>
	    <body ng-controller='Ctrl' ng-init="yourname='alfred'">
	        Your name: <input type="text" ng-model="yourname">
	        <hr>
	        Hello {{yourname}}!
	    </body>
	</html>
	
通过`ng-init="yourname='alfred'"`来初始化`yourname`,这样做的优先级比后初始化更高，结果youname=alfred

调用顺序

1. $scope.yourname = "World";
1. ng-init="yourname='alfred'

最终结果youname=alfred

### 后绑定

即controller里的值可以传给页面

	<!doctype html>
	<html ng-app='myapp'>
	    <head>
	        <script src="js/angular/angular.min.js"></script>
			<script>
				var app = angular.module('myapp', []);

				app.controller('Ctrl', function($scope){
					// 初始化yourname属性
					$scope.yourname = "World";
				});
			</script>
	    </head>
	    <body ng-controller='Ctrl'>
	        Your name: <input type="text" ng-model="yourname">
	        <hr>
	        Hello {{yourname}}!
	    </body>
	</html>
	
这里`ng-model`便是前绑定地方。输入框里的值会赋值给`yourname`

### 换种方式

重新看源代码

	<!doctype html>
	<html ng-app>
	    <head>
	        <script src="js/angular/angular.min.js"></script>
	    </head>
	    <body>
	        Your name: <input type="text" ng-model="yourname" placeholder="World">
	        <hr>
	        Hello {{yourname || 'World'}}!
	    </body>
	</html>
	
现在再看这段代码的时候，是不是清晰多了？

页面里的模板

	yourname = $scope.yourname

页面的ng-model映射

	ng-model= yourname = $scope.yourname

至此，推导出双向绑定。一切都源自$scope


