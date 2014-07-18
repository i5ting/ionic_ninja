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

### 表达式运算

	<p>1 + 2 = {{ 1 + 2 }}</p>
	
	
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




## AngularJS应用的解析

本节描述AngularJS应用程序的三个组成部分，并解释它们如何映射到模型-视图-控制器设计模式：

### 模板（Templates）

模板是您用HTML和CSS编写的文件，展现应用的视图。 您可给HTML添加新的元素、属性标记，作为AngularJS编译器的指令。 AngularJS编译器是完全可扩展的，这意味着通过AngularJS您可以在HTML中构建您自己的HTML标记！

### 应用程序逻辑（Logic）和行为（Behavior）

应用程序逻辑和行为是您用JavaScript定义的控制器。AngularJS与标准AJAX应用程序不同，您不需要另外编写侦听器或DOM控制器，因为它们已经内置到AngularJS中了。这些功能使您的应用程序逻辑很容易编写、测试、维护和理解。

### 模型数据（Data）

模型是从AngularJS作用域对象的属性引申的。模型中的数据可能是Javascript对象、数组或基本类型，这都不重要，重要的是，他们都属于AngularJS作用域对象。

AngularJS通过作用域来保持数据模型与视图界面UI的双向同步。一旦模型状态发生改变，AngularJS会立即刷新反映在视图界面中，反之亦然。

此外，AngularJS还提供了一些非常有用的服务特性：

底层服务包括依赖注入，XHR、缓存、URL路由和浏览器抽象服务。
您还可以扩展和添加自己特定的应用服务。
这些服务可以让您非常方便的编写WEB应用。


## 引导AngularJS应用

通过ngApp指令来自动引导AngularJS应用是一种简洁的方式，适合大多数情况。在高级开发中，例如使用脚本装载应用，您也可以使用bootstrap手动引导AngularJS应用。

AngularJS应用引导过程有3个重要点：

- 注入器(injector)将用于创建此应用程序的依赖注入(dependency injection)；
- 注入器将会创建根作用域作为我们应用模型的范围；
- AngularJS将会链接根作用域中的DOM，从用ngApp标记的HTML标签开始，逐步处理DOM中指令和绑定。

一旦AngularJS应用引导完毕，它将继续侦听浏览器的HTML触发事件，如鼠标点击事件、按键事件、HTTP传入响应等改变DOM模型的事件。这类事件一旦发生，AngularJS将会自动检测变化，并作出相应的处理及更新。

上面这个应用的结构非常简单。该模板包仅含一个指令和一个静态绑定，其中的模型也是空的。下一步我们尝试稍复杂的应用！

![](http://docs.angularjs.org/img/tutorial/tutorial_00.png)



## 视图和模板

在AngularJS中，一个视图是模型通过HTML**模板**渲染之后的映射。这意味着，不论模型什么时候发生变化，AngularJS会实时更新结合点，随之更新视图。

比如，视图组件被AngularJS用下面这个模板构建出来：

	<!doctype html>
	<html ng-app='myapp'>
	    <head>
			<meta charset='utf-8' />
	        <script src="js/angular/angular.min.js"></script>
			<script>
				var app = angular.module('myapp', []);

				app.controller('PhoneListCtrl', function($scope){
					// 初始化yourname属性
					$scope.phones = [
					    {"name": "Nexus S",
					     "snippet": "Fast just got faster with Nexus S."},
					    {"name": "Motorola XOOM™ with Wi-Fi",
					     "snippet": "The Next, Next Generation tablet."},
					    {"name": "MOTOROLA XOOM™",
					     "snippet": "The Next, Next Generation tablet."}
					  ];
				});
			</script>
	    </head>
		<body ng-controller="PhoneListCtrl">
			<ul>
				<li ng-repeat="phone in phones">
				  	{{phone.name}} <p>{{phone.snippet}}</p>
				</li>
			</ul>
		</body>
	</html>

我们刚刚把静态编码的手机列表替换掉了，因为这里我们使用ngRepeat指令和两个用花括号包裹起来的AngularJS表达式——`{{phone.name}}`和`{{phone.snippet}}`——能达到同样的效果。

- 在`<li>`标签里面的ng-repeat="phone in phones"语句是一个AngularJS迭代器。这个迭代器告诉AngularJS用第一个`<li>`标签作为模板为列表中的每一部手机创建一个`<li>`元素。
- 正如我们在第0步时学到的，包裹在`phone.name`和`phone.snippet`周围的花括号标识着数据绑定。和常量计算不同的是，这里的表达式实际上是我们应用的一个数据模型引用，这些我们在`PhoneListCtrl`控制器里面都设置好了。

![](http://docs.angularjs.org/img/tutorial/tutorial_02.png)


尽管控制器看起来并没有起到什么控制的作用，但是它在这里起到了至关重要的作用。通过给定我们数据模型的语境，控制器允许我们建立模型和视图之间的数据绑定。我们是这样把表现层，数据和逻辑部件联系在一起的：

`PhoneListCtrl`——控制器方法的名字（在JS文件controllers.js中）和`<body>`标签里面的`ngController`指令的值相匹配。
手机的数据此时与注入到我们控制器函数的作用域（`$scope`）相关联。当应用启动之后，会有一个根作用域被创建出来，而控制器的作用域是根作用域的一个典型后继。这个控制器的作用域对所有`<body ng-controller="PhoneListCtrl">`标记内部的数据绑定有效。
AngularJS的作用域理论非常重要：一个作用域可以视作模板、模型和控制器协同工作的粘接器。AngularJS使用作用域，同时还有模板中的信息，数据模型和控制器。这些可以帮助模型和视图分离，但是他们两者确实是同步的！任何对于模型的更改都会即时反映在视图上；任何在视图上的更改都会被立刻体现在模型中。

想要更加深入理解AngularJS的作用域，请参看[AngularJS作用域文档](http://docs.angularjs.org/api/ng.%24rootScope.Scope)。


### ng-repeat用法

示例1：

	<ul>
		<li ng-repeat="phone in phones">
		  	{{phone.name}} <p>{{phone.snippet}}</p>
		</li>
	</ul>

示例2：

	<table>
		<tr>
			<td>aaaa</td>
			<td>bbbb</td>
			<td>cccc</td>
		</tr>
		<tr ng-repeat="phone in phones">
			<td>{{phone.name}}/{{phone.snippet}}</td>
		</tr>
	</table>
	
	<table>
	    <tr><th>row number</th></tr>
	    <tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i+1}}</td></tr>
	</table>


总结规律

- 首先，观察dom结构，知道自己要生成的结构是什么样的
- 对比数据是否满足
- 编写模板，在合适的位置加入angular表达式




## 过滤器

	<!doctype html>
	<html ng-app='myapp'>
	    <head>
			<meta charset='utf-8' />
	        <script src="js/angular/angular.min.js"></script>
			<script>
				var app = angular.module('myapp', []);

				app.controller('PhoneListCtrl', function($scope){
					// 初始化yourname属性
					$scope.phones = [
					    {"name": "Nexus S",
					     "snippet": "Fast just got faster with Nexus S."},
					    {"name": "Motorola XOOM™ with Wi-Fi",
					     "snippet": "The Next, Next Generation tablet."},
					    {"name": "MOTOROLA XOOM™",
					     "snippet": "The Next, Next Generation tablet."}
					  ];
				});
			</script>
	    </head>
		<body ng-controller="PhoneListCtrl">
			<div class="container-fluid">
			  <div class="row-fluid">
			    <div class="span2">
			      <!--Sidebar content-->

			      Search: <input ng-model="query">

			    </div>
			    <div class="span10">
			      <!--Body content-->

			      <ul class="phones">
			        <li ng-repeat="phone in phones | filter:query">
			          {{phone.name}}
			        <p>{{phone.snippet}}</p>
			        </li>
			      </ul>

			       </div>
			  </div>
			</div>
		</body>
	</html>

我们现在添加了一个`<input>`标签，并且使用AngularJS的`$filter`函数来处理`ngRepeat`指令的输入。

这样允许用户输入一个搜索条件，立刻就能看到对电话列表的搜索结果。我们来解释一下新的代码：

数据绑定： 这是AngularJS的一个核心特性。当页面加载的时候，AngularJS会根据输入框的属性值名字，将其与数据模型中相同名字的变量绑定在一起，以确保两者的同步性。

- 在这段代码中，用户在输入框中输入的数据名字称作`query`，会立刻作为列表迭代器（`phone in phones | filter:query`）其过滤器的输入。当数据模型引起迭代器输入变化的时候，迭代器可以高效得更新DOM将数据模型最新的状态反映出来。

![](http://docs.angularjs.org/img/tutorial/tutorial_03.png)

- 使用filter过滤器：filter函数使用query的值来创建一个只包含匹配query记录的新数组。ngRepeat会根据filter过滤器生成的手机记录数据数组来自动更新视图。整个过程对于开发者来说都是透明的。




## 排序


## 使用ngBind或者ngBindTemplate指令
















