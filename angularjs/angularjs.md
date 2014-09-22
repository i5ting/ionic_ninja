# 精通使用AngularJS开发Web App

http://www.amazon.com/Mastering-Web-Application-Development-AngularJS/dp/1782161821/

## 第一章 Angular之道

这一章主要是介绍AngularJS，包括这个框架以及它背后的项目。首先我们先大概看看这个项目本身：谁在更新代码，到哪里去找源码和文档，如何寻求帮助等等。

本章的大部分内容用来介绍AngularJS框架，它的核心概念，编码模式。这会覆盖到很广泛的内容，为了让学习的过程更快更轻松，书中会提供大量的代码示例。

AngularJS是一个独特的框架，毫无疑问会在未来几年内对web开发领域产生重大影响。所以会在本章最后一部分来解释是什么让AngularJS如此的与众不同，与其他现有的框架任何比较，它下一阶段的规划。

本章中我们会涵盖以下一个话题：

- 怎么用AngularJS来写一个Hello World应用。在写的过程中，你会了解到到哪里去找框架的源码，文档和社区。
- 逐渐熟悉构建任何AngularJS应用的基础构建：有指令的模板，scopes（作用域）和controllers（控制器）。
- 了解AngularJS复杂又强大的依赖注入系统
- 该如何比较AngularJS和其他框架和库（尤其是jQuery），是什么让他与众不同。


### 遇见AngularJS

AngularJS是用javascript写的客户端 MVC 框架，它运行在浏览器中，并极大的帮助我们（开发者）书写现代的、单页的、AJAX风格的web App。这是一个通用的框架，但当你用来开发CRUD（创建 读取 更新 删除）类型的web app时更能显现出它的强大之处。

#### 熟悉框架

AngularJS是客户端MVC框架的一个新丁，但它已经吸引了极大的关注，主要是因为它革命性的模板系统，易于开发，还有非常坚实的工程实践。的确，他的模板系统在于多方面都是独一无二的：
- 它使用HTML作为模板语言
- 它并不需呀显示的DOM刷新，因为AngularJS能够跟踪用户的动作，浏览器的事件，并能在模型被改变后指出哪个模版需要在何时刷新。
- 它还有一个有意思而且扩展性很强的组件子系统，它还能教会浏览器如何理解一些新的HTML标签和属性。

模板子系统可能是最易被看到的部分，但也别误解以为AngularJS就是一个囊括了一些工具和单页web App经常用到的服务的集合。

AngularJS还有一些隐藏的财富，依赖注入（DI）还有很强的可测试性。对依赖注入的内置支持使得从更小更彻底的测试过服务中组装一个web App更容易。框架的设计和它周边的工具集都提倡并推广在开发的每一个阶段都使用测试惯例。

#### 找到你需要的方式

AngularJS在客户端MVC框架的舞台上相对来说还是一个新人；它的1.0的版本在2012年6月才发布，这个框架的工作开始于2009年，起初是Miško Hevery的一个个人项目，作者是Google的员工。最初的想法确实非常棒，在编码期间，项目被Google正式的收纳。现在在Google有一整个团队全日制的维护更新这个框架。

AngularJS是一个开源项目，放在Github上（[https://github.com/ angular/angular.js]https://github.com/ angular/angular.js），并由Google采用MIT方式授权。

#### 社区

时至今日，离开社区的支持，任何一个项目都无法存活下去。幸运的是，AngularJS拥有一个活跃的，支持度高的社区。下面是一些交流频道，可以用来讨论设计，提问求助：
- angular@googlegroups.com 邮件列表（Google小组）
- Google+ 在 https://plus.google.com/u/0/communities/115368820700870330756
- #angularjs IRC 频道
- 在 http://stackoverflow.com 上的 [angularjs] 标签
AngularJS团队通过维护一个博客（http://blog.angularjs.org/）来跟社区保持联系，还有一些社交媒体，Google + (+ AngularJS)，还有 Twitter（ @angularjs）。同时还有世界各地举办的社区见面会；如果哪次正好在你周边举行，当然是很值得去参加的。

#### 线上学习资源

AngularJS有自己专用的网站（http://www.angularjs.org），在这里我们可以找到关于一个体面的框架所应该有的所有的一切：概念概览，教程，开发者指南，API参考等等。AngularJS已发布的所有的版本都可以从http://code.angularjs.org下载。

想找示例代码的人也不会失望，因为AngularJS文档中有大量的代码片段。另外，还可以浏览一系列的使用AngularJS开发的应用的列表（http://builtwith.angularjs.org）。YouTube上还有一个专门的频道（http://www.youtube.com/user/angularjs），有一些过往的录音，还有一些有用的视频教程。

#### 库和扩展

AngularJS 核心功能强大丰富，同时，活跃的社区几乎每天都在增添新的扩展。这其中的一大部分都可以在这个专门的网站上找到：http://ngmodules.org。

#### 工具

AngularJS 构建在 HTML 和 JavaScript 之上，这两个技术已经被用在Web开发上许多年了。正因为此，我们依旧可以使用我们所熟悉的编译器和IDE，浏览器扩展，等等，毫无问题。
另外，AngularJS社区还为已经存在的HTML/JavaScript工具箱里贡献了许多有意思的工具。

#### Batarang

Batarang是一个Chrome开发者工具的扩展，可以用来检视AngularJS Web应用。Batarang可以非常方便的以图形化的方式来检查分析 AngularJS 应用的运行性能等情况。我们在本书中将会广泛的使用它，可以对运行中应用后台的情况一览无余。Batarang就像其他的Chrome扩展一样，可以在Chrome的Web Store（商店）(AngularJS Batarang)中下载安装。

#### Plunker and jsFiddle

无论是Plunker（http://plnkr.co）还是jsFiddle（http://jsfiddle.net）可以非常方便的分享一些代码片段（JavaScript，CSS 和 HTML），尽管这些工具并不是专为 AngularJS 定制的，但是非常迅速的就被 AngularJS 社区所采用了，用来分享一些小的示例代码，Bug的情景重现等等。Plunker理应得到特别的关注，因为他就是用 AngularJS 来写的，而且在社区中也是一个非常流行的工具。

#### IDE extensions and plugins

我们每个人都有自己喜欢的编辑器或IDE。好消息是已经有许多款可以适用于非常流行的IDE的插件/扩展了，比如Sublime Text2(https://github.com/angular-ui/AngularJS-sublime-package)，Jet Brains的系列产品（http://plugins.jetbrains.com/plugin?pr=idea&pluginId=6971）等等。

## AngularJS速览

现在我们已经知道了到哪儿去找框架的源码，以及相关的文档，现在我们就可以开始编码了，在实战中看看AngularJS究竟是什么样子的。
本书的这一部分将为随后的章节打下基础，会涵盖 AngularJS模板，模块化，和依赖注入。任何的AngularJS web app 都是由这些基础组建而成的。

### Hello World - AngularJS示例

我们对AngularJS的第一印象就用典型的 Hello, World! 来演示，看看用AngularJS是如何来写的，同时也看看它所使用的语法。

	<html>
	<head>
	    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/
	angular.js"></script>
	</head>
	<body ng-app ng-init="name='World'">
	    <h1>Hello, {{name}}</h1>
	</body>
	</html>

首先需要引入AngularJS，这样才能在浏览器中正确运行。这就像AngularJS一样简单，它最简单的形式就是引用一个javascript文件。

	AngularJS 相对来说还是比较小的：压缩并gzip之后大概只有30KB，压缩不gzip的话大概有80KB。它并不依赖任何第三方类库。
	本书的小例子中我们会使用未经压缩的，开发友好的版本，在Google的CDN上。同时AngularJS的所有版本都可以在这里下载到：http://code.angularjs.org

在实际运行中，仅仅把AngularJS包含进来还不够，我们还需要启动这个小应用。最简单的方式就是使用自定义的属性 `ng-app` 。

`<body>` 标签附近可以看到另一个非标准的 HTML 属性：`ng-init`。我们可以使用 `ng-init` 在模板被渲染之前来初始化模型。最后要说到的就是 `{{name}}` 表达式，它就是简单的把模型的值给渲染出来了而已。

即便是在这最开始的、最简单的小例子中，也可以看到AngularJS模板系统的一些重要特性，如下所示：

- 自定义的 HTML 标签和属性可以给本来是静态的 HTML 文档增添动态行为。
- 两个花括号（{{expression}}）是一个用来输出模型值的表达式的定界符。

在 AngularJS 中，所有的可以被框架所理解和解析的特殊的 HTML 标签和属性都是指令（`directive`）。

### 双向数据绑定

对 AngularJS 来说，渲染模板简直就是最拿手的工作了；特别是当要构建一个动态web 应用的时候，AngularJS简直就能发光升仙了。为了让咱们能欣赏到 AngularJS 的真正的力量，我们就用 `input` 来扩展一下之前的 `Hello World`，如下所示：

	<body ng-app ng-init="name='World'">
	    Say hello to:　<input type="text" ng-model="name">
	    <h1>Hello, {{name}}</h1>
	</body>

这个 `input` 标签处了额外的 `ng-model` 之外简直就毫无特别之处。真正的魔法力量将会在我们在`input` 中输入文字的时候展现。突然之间，屏幕会在每次键盘敲击之后进行重绘，显示出你所敲打的名字！要刷新一个模板，你并不需要编写任何一行代码，我们也没有被强迫调用任何一个框架的 API 来更新数据模型。AngularJS 是足够聪明的，可以自动检测到模型的变化并相应的更新DOM。

大多数的传统的模板系统渲染模板时都是线性的，单向的：模型（变量）和模板被拼合在一起并将计算的结果输出。模型的任何改变都需要模板的重新计算。AngularJS无需如此，因为任何的用户引起的视图变化，都会立即映射到对应的模型中，同时，任何模型的变化也会马上传播到模板中去。

### AngularJS中的MVC

大部分现存的web应用都是构建在知名的 模型-视图-控制器（MVC） 模式的某种形式之上。但是 MVC 最大的问题在于，它本身并不是一个非常清晰的模式，而是很高阶很结构化的。更糟糕的是，最原始的模式又变异、衍生出很多种模式（最知名的可能是 MVP 和 MVVM）。要加入这些混乱的、不同的框架，开发人员常常会对这些模式做出不同的理解和解释。这样的结果就是，用着相同的 MVC 的名号，却在描述一个不同的架构和编码实现。Martin Fowler 在他很优秀的关于GUI架构的文章中对此有很好的总结（http://martinfowler.com/eaaDev/uiArchs.html）。

	就拿 模型-视图-控制器 来说，它经常被拿来当作一个模式来说事，但我却不觉得把它当做一个模式是个什么好事，因为它本身包含了很多不同的思路。不同的人看到 MVC 不同的地方会得出不同的结论，并成他们的理解为 "MVC"。如果这还没有造成足够的混乱，那你终将会从 根据对 MVC 的误解而开发的像 Chinese whispers(一个耳语传话的游戏，详见这里) 一样的系统 中看到最后的效果。
	
AngularJS团队本着非常务实的态度来整个MVC模式家族，并宣称这个框架是基于MVW（模型-视图-随便你是啥）模式的。一般说来只有在实践中见识到来能感受到（究竟如何）。

#### 鸟瞰

我们到现在为止所见到的 `Hello World`都还没有使用任何的分层策略：数据初始化，逻辑，还有视图都混在一个文件之中。在任何实际的应用中，我们都需要把更多的注意力放在分配给每层的那些责任上面。幸运的是，AngularJS提供了一些不同的构建方式，可以正确地构建更加复杂的应用。

	本书后面的例子都会省略掉 AngularJS 的初始化代码（引入脚本，ng-app 属性，等等），这样更利于阅读。
	
我们一起来看看这个稍微修改过的 `Hello World`：

	<div ng-controller="HelloCtrl">
	    Say hello to: <input type="text" ng-model="name"><br>
	    <h1>Hello, {{name}}!</h1>
	</div>
	
`ng-init` 属性被移除了，然后我们增加了一个新的 `ng-controller` 指令，以及对应着一个 JavaScript 函数。这个 `HelloCtrl` 还接受一个相当神秘的 `$scope` 作为参数：

	var HelloCtrl = function ($scope) {
	     $scope.name = 'World';
	}
	
#### Scope（作用域）

AngularJS中的 `$scope` 对象在这里就是要将 域模型 暴露给视图（模板）。只需把属性设置给 `scope` 实例，就可以在模板渲染时得到这个值。

Scopes（作用域）也可以针对特定的视图来扩展数据和特定的功能。只要在 `scope` 实例上定义一些函数就能将特定的 UI 逻辑暴露给模板了。

例如，你可以给 name 变量创建一个 getter 方法，如下所示：

	var HelloCtrl = function ($scope) {
	   $scope.getName = function() {
	      return $scope.name;
	   };
	}

然后就像下面这样在模板中使用：

	<h1>Hello, {{getName()}} !</h1>

`$scope` 对象让我们可以非常精确的控制这个域内的模型的哪一部分，以及哪些操作在视图层是可用的。理论上来讲，AngularJS的 scopes 非常类似于 MVVM 模式的 ViewModel。

#### 控制器

控制器的首要任务就是初始化scope对象。在实践中，初始化的逻辑由下面的这些责任组成：
- 提供模型初始化的值
- 扩展 `$scope` 的 UI 行为（方法）
控制器都是普通的 JavaScript 函数。他们并不必去继承一些框架特定提供的类，也不必去调用任何特定的 AngularJS API才能去正确的执行他们的任务。

	请注意，控制器在设置模型的初始值时是跟 ng-init指令所做的任务一样的。有了控制器，才使得使用 JavaScript 来表达初始化的逻辑成为可能，而不必拿代码把HTML模版搞的一团糟。
	
#### 模型

AngularJS 的模型就是那些普通的 JavaScript 对象。我们不必被强迫去继承一些框架的基础类，也不必以某种特殊的方式来初始化模型对象。

使用任何现有的，纯JavaScript类或对象，就跟在模型层一样的去使用它们也是可以的。同时也没有被限制说只能使用最原始的值来做模型属性（任何合法的JavaScript 对象或数组都可以使用）。要把模型暴露给 AngularJS，你只需把它赋值给 `$scope` 的属性即可。

	AngularJS不是侵入式的，所以可以放心的把任何针对其他框架特定的代码拿来当作模型使用。
	
#### 深入探讨 Scope 作用域

每一个 `$scope` 都是类 `Scope` 的一个实例。类 `Scope` 拥有可以控制 `scope` 生命周期的方法，提供事件传播的能力，并支持模板渲染。

作用域的层次结构

让我们再来看看这个简单的 `HelloCtrl` 的例子：

	var HelloCtrl = function($scope){
	    $scope.name = 'World';
	}

`HelloCtrl` 看起来就跟普通的 JavaScript 构造函数没什么区别，事实上，除了 `$scope` 这个参数之外，确实没什么新奇之处。不过，这个参数究竟是从哪里来的呢？

这个新的作用域是由 `ng-controller` 指令使用 `Scope.$new()` 方法生成的。等一下，这么说来我们必须至少拥有一个 `scope` 的实例才能创建新的 `scope` ！没错，AngularJS其实有一个 `$rootScope`（这个是所有其他作用域的父级）。这个 `$rootScope` 实例是在一个新的应用启动的时候创建的。

`ng-controller` 指令就是 `可以创建作用域` 指令的其中一个。AngularJS 会在任何它在DOM树中碰到这种 可以创建作用域 指令的时候创建一个新的 `Scope` 类的实例。这些新创建的作用域通过 `$parent` 属性指向它自身的父作用域。DOM树中会有很多 `可以创建作用域` 的指令，结果就是，`很多作用域` 被创建了。

	作用域的形式类似于父子、树状的关系，并且最根部的就是 $rootScope 实例。就像作用域是被DOM树驱动着创建的一样，作用域树也是在模仿 `DOM` 的结构。

现在你已经知道了，一些指令会创建新的子级的作用域，你可能会想，为什么会需要这些复杂的东西。要想理解这一点，我们来演示一个例子，其中使用了 `ng-repeat` 循环指令。

控制器如下：

	var WorldCtrl = function ($scope) {
	    $scope.population = 7000;
	    $scope.countries = [
	        {name: 'France', population: 63.1},
	        {name: 'United Kingdom', population: 61.8},
	    ];
	};

模版如下：

	<ul ng-controller="WorldCtrl">
	    <li ng-repeat="country in countries">
	        {{country.name}} has population of {{country.population}}
	    </li>
	    <hr>
	    World's population: {{population}} millions
	</ul>
	
这个 `ng-repeat` 指令可以迭代一个 `countries` 的集合，并且为集合中的每一项都创建新的DOM 元素。`ng-repeat` 指令的语法非常容易理解；其中每一项都需要一个新的变量 `country`，并把它挂到 `$scope` 上面，以便视图渲染使用。

但这里有一个问题，就是，每一个 `country` 都需要将一个新的变量挂载到一个 `$scope` 上去，而我们也不能就简单的覆盖掉前面被挂在上去的值。AngularJS 通过为集合中的每一个元素都创建一个新的作用域来解决这个问题。新创建的这些作用域跟相匹配的DOM树结构非常相像，我们也能通过之前提到的那个牛逼的 Chrome 扩展 Batarang 来可视化的看到这一点，下面是屏幕截图：

![](http://www.peichao01.com/Mastering_AngularJS_book/ch1_p16.png)

正如我们在截图中所看到的，每一个作用域（以矩形标注边界）维护属于她自己的一段数据模型。给不同的作用域增加同名的变量是完全没有问题的，不会发生命名冲突（不同的DOM元素会指向不同的作用域，并使用相对应的作用域的变量来渲染模板）。这样一来，每个元素又有自己的命名空间，在前面的例子中，每一个 `<li>` 元素都有自己的作用域，而 `country` 变量就定义在各自的作用域上面
	
#### Scope的层次结构和继承

定义在作用于上的属性对他的子级作用于来说是可见的，试想一下，子级作用域并不需要重复定义同名的属性！这在实践中是非常有用的，因为我们不必一遍又一遍的重复定义本来可以通过作用域链得到的那些属性。

再来看看前面的例子，假设我们想要显示给出的这些国家与世界总人口的百分比。要实现这个功能，我们可以在一个作用域上定义一个 `worldsPercentage` 的方法，并由 `WorldCtrl` 来管理，如下所以：

	$scope.worldsPercentage = function (countryPopulation) { 
	    return (countryPopulation / $scope.population)*100;
	}

然后被 `ng-repeat` 创建的每一个作用域实例都来调用这个方法，如下：

	<li ng-repeat="country in countries">
	    {{country.name}} has population of {{country.population}},
	    {{worldsPercentage(country.population)}} % of the World's
	   population
	</li>

AngularJS中作用域的继承规则跟 JavaScript 中原型的继承规则是相同的（在需要读取一个属性的时候，会一直向继承树的上方查询，直到找到了这个属性为止）。

#### 贯穿作用域链的继承的风险

这种透过作用域层次关系的继承，在读数据的时候显得非常的直观、易于理解。但是在写数据的时候，就变的有点复杂了。

让我们来看看，如果我们在一个作用域上定义了一个变量，先不管是否在子级作用域上。JavaScript代码如下：

	var HelloCtrl = function ($scope) {
	};

视图的代码如下：

	<body ng-app ng-init="name='World'"> 
	    <h1>Hello, {{name}}</h1>
	    <div ng-controller="HelloCtrl">
	        Say hello to: <input type="text" ng-model="name">
	        <h2>Hello, {{name}}!</h2> 
	    </div>
	</body>

运行一下这段代码，就可以发现，这个 `name` 变量尽管仅仅是定义在了最顶级的作用域上，但在整个应用中都是可见的！这说明变量是从作用域链上继承下来的。换句话说，变量是在父级作用域上定义的，然后在子级作用域中访问的。

现在，我们一起来看看，如果在 `<input>` 中写点字会发生什么，结果如下图所示：

![](http://www.peichao01.com/Mastering_AngularJS_book/ch1_p18.png)

你可能会感到吃惊，因为 `HelloCtrl` 控制器所初始化的作用域创建了一个新的变量，而不是直接去修改 `$rootScope` 实例中的值。不过当我们认识到作用域也只不过是在彼此间进行了原型继承，也就不会觉得那么吃惊了。所有可以用在 JavaScript 对象上的原型继承的规则，都可以同等的用在 作用域 的原型链继承上去。毕竟 `Scopes` 作用域就是 JavaScript 对象嘛。

在子级作用域中去改变父级作用域上面的属性有几种方法。第一种，我们就直接通过 `$parent` 属性来引用父级作用域，但我们要看到，这是一个非常不可靠的解决方案。麻烦之处就在于，`ng-model` 指令所使用的表达式非常严重的依赖于整个DOM结构。比如就在 `<input>` 标签上面的哪里插入另一个 可创建作用域 的指令，那 `$parent` 就会指向一个完全不同的作用域了。

	就经验来讲，尽量避免使用 $parent 属性，因为它强制的把 AngularJS 表达式和你的模板所创建的 DOM 结构捆绑在了一起。这样一来，HTML结构的一个小小的改动，都可能会让整个应用崩溃。

另一个解决方案就是，不要直接把属性绑定到 作用域上，而是绑到一个对象上面，如下所示：

	<body ng-app ng-init="thing = {name : 'World'}"> 
	    <h1>Hello, {{thing.name}}</h1>
	    <div ng-controller="HelloCtrl">
	        Say hello to: <input type="text" ng-model="thing.name">
	        <h2>Hello, {{thing.name}}!</h2> 
	    </div>
	</body>

这个方案会更可靠，因为他并没有假设 DOM 树的结构是什么样子。

	避免直接把数据绑定到 作用域的属性上。应优先选择把数据双向绑定到对象的属性上（然后再把对象挂到 scope 上）。
	就经验而言，在给 ng-model 指令的表达式中，你应该有一个点（例如， ng-model="thing.name"）。
	
#### 作用域层级和事件系统

层级关系中的作用域可以使用 `event bus`（一种事件系统）。AngularJS可以在作用域层级中传播具名的装备齐全的事件。事件可以从任何一个作用域中发出，然后向上（$emit）和向下（$broadcast）四处传播。

![](http://www.peichao01.com/Mastering_AngularJS_book/ch1_p20.png)

AngularJS核心服务和指令使用这种事件巴士来发出一些应用程序状态变化的重要事件。比如，我们可以监听 `$locationChangeSuccess` 事件（由 `$rootScope` 实例发出），然后在任何 `location`（浏览器中就是URL）变化的时候都会得到通知，如下所示：

	$scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl){ 
	    //react on the location change here
	    //for example, update breadcrumbs based on the newUrl
	});

每一个作用域对象都会有这个 `$on` 方法，可以用来注册一个作用域事件的侦听器。这个函数所扮演的侦听器在被调用时会有一个 `event` 对象作为第一个参数。后面的参数会根据事件类型的不同与事件本身的配备一一对应。

类似于 `DOM` 事件，我们可以调用 `event` 对象的 `preventDefault()` 和 `stopPropagation()` 方法。stopPropagation() 方法将会阻止事件沿着作用域层级继续冒泡，并且只在事件向上层传播的时候`（$emit）`才有效。

	尽管 AngularJS 的事件系统是模仿了 DOM 的，但两个事件传播系统是完全独立的，没有任何共同之处。
	
虽然在作用域层级中传播事件对一些问题来说是一种非常优雅方案（特别是对全局的，异步的状态变化来说），但还是要适度使用。通常情况下，可以依靠双向数据绑定来得到一个比较干净的方案。在整个 AngularJS 框架中，一共只发出`（$emit）`了三个事件（`$includeContentRequested`,`$includeContentLoaded`,`$viewContentLoaded`）和七个广播（`$broadcast`）（`$locationChangeStart`, `$locationChangeSuccess`, `$routeUpdate`, `$routeChangeStart`, `$routeChangeSuccess`, `$routeChangeError`, `$destroy`）。正如你所看到的，作用域事件使用的非常少，我们应该在发送自定义的事件之前认真的评估一下其他的可选方案（多数会是双向数据绑定）。

	千万不要在 AngularJS 中模仿 DOM 的基于事件的编程方式。大多数情况下，你的应用会有更好的架构方式，你也可以在双向数据绑定这条路上深入探索。
	
#### 作用域的生命周期

作用域需要提供相互隔离的命名空间，避免变量的命名冲突。作用域们都很小，而且被以层级的方式组织起来，对内存使用的管理来说很有帮助。当其中一个作用域不再需要 ，它就可以被销毁了。结果就是，这个作用域所暴露出来的模型和方法就符合的垃圾回收的标准。

新的作用域通常是被 可创建作用域 的指令所生成和销毁的。不过也可以使用 `$new()` 和 `$destroy()` 方法来手动的创建和销毁作用域。

### 视图

我们已经见了这许多AngularJS模版的例子，应该认识到他并不是“又出现一个模板语言”，但确实还是有许多的不同（跟其他模板语言相比）。不仅是说框架的模板语法依赖于HTML，还允许我们来扩展HTML的词汇，而且还有可以在没有任何人工干预的情况下刷新局部视图这种的独一无二的能力！

事实上，AngularJS 与 HTML 和 DOM 的联系更为密切，因为它就是依赖浏览器来解析模版内容的（就跟浏览器会对任何其他的HTML文档所做的那样）。在浏览器把标记文本转化为 DOM 树之后，AngularJS就会进入这个解析好的DOM结构。然后，每当遇到一个指令，AngularJS就会执行它的逻辑，并将指令变为动态的内容。

	既然AngularJS 依赖于浏览器来解析模板，我们就需要确保提供的模板是合格的HTML内容。要特别注意HTML标签的正确闭合（否则的话，不会输出错误信息，但视图却不会被正确的渲染出来）。AngularJS 必须在正确的DOM树上工作。
	
AngularJS 使得丰富HTML的词汇表成为可能（我们可以添加新的属性或HTML元素，并教会浏览器应该如何解析他们）。这就像在 HTML 基础上创建一门特定领域语言（`domain-specific language`），并指导浏览器如何理解新的指令。你可能经常会听到AngularJS“教了浏览器一些新的技巧”。

#### 声明式模板视图 - 势在必行的控制器逻辑

AngularJS自带了很多方便的指令，我们将会在后面的章节中涵盖其中的大部分。最重要的事情，其实不是去了解单个指令的语法和功能，而是 AnulgarJS 构建 UI 的背后的哲学思想。

AngularJS 推广了一套声明式的构建 UI 的方式。在实践中这意味着，模板会把重心放在如何描述一个期望的效果，而不是如何具体实现它。听起来可能有点困惑，那就看个例子吧。

让我们想象一下这种情况，我们需要创建一个form，用户可以输入一些简短的文字，然后可以点击按钮发送表单。当然这还涉及到一些用户体验的事情，比如文字长度需要限制在100字以内，如果超出范围就禁用 发送 按钮。用户需要在他们输入的时候知道还剩多少个字。如果剩余的字数小于10，那么提示文字就要改变样式为警告的状态。也需要能够清除已经存在的文字。完成后的form可能看起来如下图：

![](http://segmentfault.com/img/bVbGDv)

上面这个需求不是特别有挑战性，也只是一个普通的文本表单，尽管如此，这里还是由于多需要整合的UI元素，比如，要确保按钮的 `disabled` 禁用状态可以正常工作，剩余字数要用恰当的样式来准确的显示等等。首次尝试的实现代码如下：

	<div class="container" ng-controller="TextAreaWithLimitCtrl">
	   <div class="row">
	       <textarea ng-model="message">{{message}}</textarea>
	   </div>
	   <div class="row">
	     <button ng-click="send()">Send</button>
	     <button ng-click="clear()">Clear</button>
	   </div>
	</div>
	
我们还是使用前面的代码作为起点，在那个基础上继续。首先，我们需要显示剩余字数，这个相当容易，如下所示：

	<span>Remaining: {{remaining()}}</span>
	
`remaining()` 函数定义在 `TextAreaWithLimitCtrl` 控制器中的 `$scope` 上，如下：

	$scope.remaining = function () {
	    return MAX_LEN - $scope.message.length;
	};

然后，我们需要在文本不符合字数限制的时候禁用 Send 按钮。这个可以用 ng-disabled 指令很容易的实现，如下：

	<button ng-disabled="!hasValidLength()"...>Send</button>
	
这里使用了一个固定模式。要操作UI的话，只需接触模板的一小部分，然后根据模型的状态（这里就是文本的长度）描述一个期望的输出结果（显示剩余字数，禁用按钮等）即可。最有意思的地方在于，我们不需在 JavaScript 代码中持有任何对DOM元素的引用，我们也不需要准确的操控DOM元素。现在我们只需关注模型的变化，让 AngularJS 去做那些枯燥繁重的工作去吧。我们所需要做的只是在这种形式的指令中提供一些建议。

继续回到我们的例子中来，我们还要确保剩余字数的提示要在只剩下很少字数的时候改变样式。这是一个可以可实战中学习另一个声明式UI的例子的好机会。如下所示：

	<span ng-class="{'text-warning' : shouldWarn()}"> 
	Remaining: {{remaining()}}
	</span>
	
shouldWarn() 方法的实现如下所示：

	$scope.shouldWarn = function () {
	    return $scope.remaining() < WARN_THRESHOLD; 
	};

CSS class 的变化是根据模型的变化而来的，但是我们并没有在 JavaScript 中写任何的操作 DOM 的代码！UI 会基于以声明的方式表达的“想要干嘛”而重绘。我们用 `ng-class` 指令所表达的意思是：“每次字数超出限制，都要通过把 `text-warning` 加到 `<span>` 元素的 `class` 上面 来给用户一个警示”。这跟下面这种说法是相当不同的 “当输入一个新的字符，并且字数超出了限制，就去找到 `<span>` 元素，然后改变这个元素的 CSS class `text-warning`”。（译注：两种不同的思路，前一种是描述你所希望的状态，后一种是完全的把你要实现这种结果的过程描述出来）。

我们这里说的好像只是有点微妙的不同，但其实，声明式的和命令式的是两种相当对立的实现方式。命令式的编程，重点在于描述每一个单独的过程，并将结果导向希望得到的结果。声明式的方式，重点在于希望得到的结果。至于要达到这个结果的那些独立的步骤是由支持这种方式的框架所关心的。这就像是在说“亲爱的 AngularJS，这就是当模型到某个状态之后，我所希望的UI能够展示的状态，现在呢，就请开始想想什么时候以及如何来重绘这些UI吧”。

声明式的编程通常更富有表达力，因为把开发人员从非常细微的、底层的指令（编码）中解放出来了。产出的代码通常都非常的简洁、易于阅读。但若要在工作中使用声明的方式，就必须有装备工具能够正确的理解更高级的指令。我们的程序开始依赖于这些机器的决定，并且我们需要放弃一些底层的控制权。使用命令式的方式，我们拥有完全的控制权，也能很好的协调好每一个单独的操作。我们得到了更多的控制权，这种“负责任”的代价就是要写非常多的底层的、重复的代码。

熟悉 SQL 语言的读者会觉得这些听起来都非常的熟悉（SQL 是一个针对请求临时(adhoc)数据的非常富有表达力的声明式的语言）。我们简单的描述一下需要得到的结果（去fetch的数据），之后的就是去让（关系型）数据库去想该怎么去拿到特定的数据了。绝大多数情况下，这个过程都能完美的工作，我们也能很快速的拿到我们所想得到的。当然也有一些情况需要给出更多的提示（索引(indexes)，查询计划提示(query planner hints)等等），或者手动控制数据检索过程，以便优化性能。

AngularJS模板中的指令声明式的描述了所期望的结果，所以呢，我们得以从一步步的给出如果改变DOM元素的各个属性（基于 jQuery 的应用通常需要如此）中解脱出来。AngularJS 极力推广在模板上使用声明式的编程，而在javascript代码中是用命令式的（控制器和业务逻辑）。使用 AngularJS的话，我们很少会使用到低级的、命令式的指令来操作DOM（唯一的例外是在指令里面中的代码）。

	就经验而言，千万不要在 AngularJS控制器中操作 DOM 元素。在控制器中获取一个DOM的引用，并操作DOM的属性，是在用命令式的方式控制UI -- 这是跟 AugularJS 构建 UI 的思想相悖的。

使用 AngularJS 指令写出来的声明式的 UI 模板可以很迅速的描述出复杂的、交互的UI。AngularJS 会自主做出所有这些底层决定何时以及如何操作DOM树的部分。绝大多数时候 AngularJS 会做出“正确的事情”，并更新UI为所预期的(也非常及时的)。不过，理解 AngularJS 的内部工作原理也非常的重要，这样的话我们就可以在需要的时候给框架一些适当的提示。这里的情况跟 SQL 又非常的相似，大多数情况下，我们都不需要为查询计划的工作情况操心。但当我们遇到性能问题的时候，了解查询计划是如何下决定的就非常有价值了，这样一来我们就可以给它提供更多的意见。这同样适用于 AngularJS 的UI 管理：我们需要了解背后的机制，以便于更高效的使用模板和指令。

### 模块和依赖注入

细心的读者可能已经发现了，到目前为止所用到的例子都是使用的全局的构造函数来定义控制器的。但是，全局的状态是邪恶的，它危及了应用的结构，让代码更难以维护，测试，和阅读。AngularJS 绝不会建议使用全局状态的。相反，它提供了一整套的 API，可以很方便的定义模块，在这些模块中注册对象。

#### AngularJS中的模块

我么一起来看看怎么把一个丑陋的，全局定义的控制器转换为同等的模块化的定义。之前的控制器是这么声明的：

	var HelloCtrl = function ($scope) { 
	    $scope.name = 'World';
	}

模块化之后是这样的：

	angular.module('hello', []) 
	.controller('HelloCtrl', function($scope){
	    $scope.name = 'World';
	});

AngularJS 自身定义了一个全局的 `angular` 名字空间。这个名字空间提供了很多不同类型的工具和方便的方法，`module` 就是这些方法的其中一个。`module` 会扮演一个其他的AngularJS需要管理的对象（控制器、服务等）的容器。正如我们之后就会看到的，除了简单的名称空间和代码组织之外，模块还有非常多的东西需要学习。

要定义一个新的模块，我们需要给 `module` 方法的第一个参数提供模块的名字。第二个参数指定所需要依赖的模块（在之前的模块中，我们没有依赖与任何其他模块）。

对 `angular.module` 方法的调用会返回一个新创建的模块的实例。一旦我们是用这个实例，就可以开始定义新的控制器了。这非常的简单，只需使用如下参数来调用 `controller` 即可：

- 控制器的名字（字符串类型）
- 控制器的构造函数


	全局定义的控制器构造函数只适用于快速示例和原型开发。永远不要在大型的、真实的应用中使用全局定义的控制器。
	
现在已经定义了一个模块，但我们还需要通知 AngularJS 它的存在。这是通过给 `ng-app` 属性提供一个值来完成的，如下：

	<body ng-app="hello">
	
	一个经常犯的错误就是忘记了在 `ng-app` 属性中指定模块的名字，这也会造成一些常见的困惑。在 `ng-app` 属性中省略模块名称会引起错误，说明有未定义的控制器。


## 资源

http://www.ituring.com.cn/minibook/303

http://blog.segmentfault.com/chao2/1190000000361964
