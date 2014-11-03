# Chapter 5:关于amd加载
content

- amd与commonjs
- 最简单的amd

AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD
CMD 规范在这里：https://github.com/seajs/seajs/issues/242

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
类似的还有 CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。
还有不少⋯⋯

这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的。
目前这些规范的实现都能达成浏览器端模块化开发的目的。

## amd与commonjs

模块的规范
先想一想，为什么模块很重要？
因为有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。
但是，这样做有一个前提，那就是大家必须以同样的方式编写模块，否则你有你的写法，我有我的写法，岂不是乱了套！考虑到Javascript模块现在还没有官方规范，这一点就更重要了。
目前，通行的Javascript模块规范共有两种：CommonJS(http://wiki.commonjs.org/wiki/Modules/1.1)和AMD(https://github.com/amdjs/amdjs-api/wiki/AMD)。我主要介绍AMD，但是要先从CommonJS讲起。

### CommonJS

2009年，美国程序员Ryan Dahl创造了node.js项目，将javascript语言用于服务器端编程。

这标志"Javascript模块化编程"正式诞生。因为老实说，在浏览器环境下，没有模块也不是特别大的问题，毕竟网页程序的复杂性有限；但是在服务器端，一定要有模块，与操作系统和其他应用程序互动，否则根本没法编程。

node.js的[模块系统](http://nodejs.org/docs/latest/api/modules.html)，就是参照[CommonJS规范](http://wiki.commonjs.org/wiki/Modules/1.1)实现的。在CommonJS中，有一个全局性方法require()，用于加载模块。假定有一个数学模块math.js，就可以像下面这样加载。

　　var math = require('math');

然后，就可以调用模块提供的方法：

　　var math = require('math');
　　math.add(2,3); // 5

因为这个系列主要针对浏览器编程，不涉及node.js，所以对CommonJS就不多做介绍了。我们在这里只要知道，require()用于加载模块就行了。

### 浏览器环境

有了服务器端模块以后，很自然地，大家就想要客户端模块。而且最好两者能够兼容，一个模块不用修改，在服务器和浏览器都可以运行。
但是，由于一个重大的局限，使得CommonJS规范不适用于浏览器环境。还是上一节的代码，如果在浏览器中运行，会有一个很大的问题，你能看出来吗？

　　var math = require('math');
　　math.add(2, 3);

第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。

这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。

因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。

### AMD

AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：

　　require([module], callback);

第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：

　　require(['math'], function (math) {
　　　　math.add(2, 3);
　　});

math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。

目前，主要有两个Javascript库实现了AMD规范：[require.js](http://requirejs.org/)和[curl.js](https://github.com/cujojs/curl)和seajs和easyjs。本系列的第三部分，将通过介绍require.js，进一步讲解AMD的用法，以及如何将模块化编程投入实战。


## 最简单的amd

```
void function() {
	var mapping = {}, cache = {};
	window.define = function(id, func) {
		mapping[id] = func
	};
	window.require = function(id) {
		if (!/\.js$/.test(id)) {
			id += ".js"
		}
		if (cache[id]) {
			return cache[id]
		} else {
			return cache[id] = mapping[id]()
		}
	}
}();

define("test.js", function(exports) {
	exports = {};

	exports.var = 1;	
	exports.say = function(){
		alert(this.var);
	}
	
	return exports;
});	
```

测试地址在 ionic_ninja/modular/simple_amd/index.html

	<script src='amd.js'></script>
	<script src='test.js'></script>

	<script>
		var demo = require(['test.js']);

		demo.say();
	</script>



###  关于domready
domready是body加载完成。一般页面操作都要在所有页面元素加载完成才操作的，典型的如jQuery的domready事件。
等到加载完成之后才做操作的原因是：只有元素在页面内才会

比较简单的模块

    //第一种方式：常规方式
    var domready = require('no320/domready');
	domready(function(){	
		alert("INFO: <body onload> 已加载完成");
    });
	
	// 第二种方式：使用别名
	window.$ = require('no320/domready');
	$(function(){
		alert("INFO: <body onload> 已加载完成");
	});
	
实现代码

```
define("no320/domready", function(require, exports, module) {
    /**
     * Creates a domready event function used to callback when page onload
     *
     * @private
     */

	function addEvent( obj, type, fn ) {
        obj.addEventListener( type, fn, false );
    }

    module.exports =function () {
        function ready( f ) {
            if( ready.done ) return f();

            if( ready.timer ) {
                ready.ready.push(f);
            } else {
                addEvent( window, "load", isDOMReady );
                ready.ready = [ f ];
                ready.timer = setInterval(isDOMReady, 13);
            }
        };

        function isDOMReady() {
            if( ready.done ) return false;


            if( document && document.getElementsByTagName && document.getElementById && document.body ) {
                clearInterval( ready.timer );
                ready.timer = null;
                for( var i = 0; i < ready.ready.length; i++ ) {
                    ready.ready[i]();
                }
                ready.ready = null;
                ready.done = true;
            }
        }
		console.log("INFO: <body onload> 已加载完成");
        return ready;
	    
	}();
});
```
###  关于foreach

代码位于foreach.js里面

```
define("each.js", function(exports) {
    /**
     * Creates a each function used to callback when page onload
     *
     * @private
     */

	//数组与伪数组的遍历 
	function _Array_forEach(array, block, context) { 
		if (array == null) return; 
		//对String进行特殊处理 
		if(typeof array == 'string'){ 
			array = array.split(''); 
		} 
		var i = 0,length = array.length; 
		for (;i < length && block.call(context, array[i], (i+1), array)!==false; i++) {} 
	}; 
	
	//对象的遍历 
	function _Function_forEach(object, block, context) { 
		for (var key in object) { 
			//只遍历本地属性 
			if (object.hasOwnProperty(key)&&block.call(context, object[key], key, object)===false){ 
				break; 
			} 
		} 
	}; 

	return exports = function(object, block, context){ 
		if (object == null) return; 
		if (typeof object.length == "number") { 
			_Array_forEach(object, block, context); 
		}else{ 
			_Function_forEach(object, block, context); 
		} 
	};
});
```

测试each.html


	<head>
		<meta charset='utf-8'/>
	</head>
	<script src='amd.js'></script>
	<script src='domready.js'></script>
	<script src='foreach.js'></script>

	<script>

		// 第二种方式：使用别名
		window.$ = require('domready'); 
		var forEach = require('each');

		$(function(){
		 	//1:1 \n 2:2 
			forEach([1,2,3,4,5],function(el,index){ 
				if(index>2){ 
					return false; 
				} 
				//alert(index+":"+el); 
			}); 
	
			function print(el,index){ 
				document.write(index+":"+el+"<br>"); 
			} 
	
			forEach({a:'a',b:'b',c:'c'},print); 
	
			forEach("PHONEGAP_IS_CORDOVA",print); 
	
			function Person(name, age) { 
				this.name = name || ""; 
				this.age = age || 0; 
			}; 
	
			Person.prototype = new Person; 
			var fred = new Person("shiren1118", 26); 
			fred.language = "chinese";//极晚绑定
			//name:shiren1118 \n age:26 \n language:chinese 
			forEach(fred,print);

		});

	</script>
	
	

## 关于requireJS和seaJS的练习



##  angularjs里的模块化

AngularJS自己有模块的概念，但只是为controller、direcitive、service等提供一个集合的概念，并没有文件调度的功能。


### 模块分类

官方推荐的模块分类方法是：

	angular.module('app',['app.direcitve','app.controller','app.service'])

简单应用的话，这样分很方便。但是当controller、direcitive等都多了，并且互相有关联的时候（比如某个direcitive需要自己的controller），这样的分法就显得脏了。

改良方案很简单：将相关的directive、controller、service拆到一个同子文件夹中，形成以业务逻辑为关联的模块。如：

	angular.module('app',['app.user','app.message']

### 怎么处理第三方模块

AngularJS的第三方模块都会有自己的模块名，如表格控件ngGrid就占用了ngGrid。这些模块名可能不符合我们的命名规则，但我的建议是不要去改动，免得升级什么的时候出问题。

那在哪里去声明对这些模块的依赖呢？我认为即使这个模块式所有子模块都要用的，也不要写成下面这样：

	angular.module('app',['app.user','app.message','ngGrid']

而应该在直接需要这个第三方模块的模块里去写：

	angular.module('app.user',['ngGrid'])

原因很简单，几乎所有的第三方模块都是不涉及到系统的业务逻辑的，当你把第三方模块和某一个业务逻辑模块混在一起的时候，其他模块也需要这个第三方模块时，你会很容易就去通过依赖这个混合的业务模块来获取第三方模块。或者说你的同事很可能会这么做。

### 目录结构

说道第三方模块就不得不说目录划分了。 大部分时候我们的目录结构是这样的：

```
--app 
   |--javascript
   |   |--*.js
   |--css
   |   |--*.css
   |--lib
   |   |--bootstrap  
```

简单应用的话这样划分足够了。不过既然说到了模块化，你应该已经猜到我要说的结构了：

```
--app 
   |--thirdParty
   |   |--moduleA
   |   |    |--js
   |   |    |--css
   |   |    |--lib
   |   |    |--subModuleC
   |   |
   |   |--moduleB
   |   
   |--system
   |   |--moduleC
```
   

不要说蛋疼，不要说“这在页面上加载脚本的时候还得一个一个去找js和css的位置”。如果你用grunt之类的工具的话应该知道这根本不是问题。这样划分的好处在于，几乎任何一个文件夹都是一个完整的模块，你可以随便拷贝到任何地方去测试什么，或者在其他简单环境开发好了再丢到系统目录下。system和thirdParty这两个目录的划分是用来区分通用模块和业务逻辑模块的。其实这就是典型的服务器端框架目录划分。
 不过实际应用中，这样目录结构还是有问题。特别是当你使用less的时候，如果你的less文件依赖thirdParty中的less库，那你在测试的时候就不得不保持住这个相同的目录结构。

解决方法是将thirdPatry放在system里。如果你的模块不多，也可以把模块平行放置。


## nodejs

see ./node.md

## 参考文档

http://blog.csdn.net/shiren1118/article/details/7761780
http://justineo.github.io/singles/writing-modular-js/