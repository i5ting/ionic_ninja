# AngularJS 2.0 正在路上..

AngularJS 作为最前沿的 JavaScript 框架之一，版本号的改变肯定不是简单的 1 + 1，所以 2.0 不负众望地带来了非常大的改变：


从模板到代码都有改动，完全不向下兼容 1.x...

变成一个叫 angularjs2 的新框架...

是的，你在 1.x 所学的大部分知识都要过时了。

## 模板语法改变

新的模板语法将更严格区分 property 和 attribute，不再采用指令统一语法，而使用 [] 和 () 来区分数据和事件行为：

	<div>
	  <input type="text" [value]="newTodoTitle">
	  <button (click)="addTodo()">+</button>

	  <ul>
	    <li [ng-repeat|todo]="todosof('goods')">{{todo.title}}</li>
	  </ul>
	<div>
	
从代码可以看到，ng-model 将被中括号替代，ng-click 则变成小括号。


## controllers 和 $scope 没了

新版本更强调组件化，不再使用 controllers 控制 view，而是使用 component directvie 声明组件，在组件内管理状态，这有点类似 reactjs 的写法：

	@ComponentDirective
	class TodoApp {
	  constructor() {
	    this.newTodoTitle = '';
	  }
	  addTodo: function() { ... }
	  todosof: function(filter) { ... }
	}

## Directive 还在，但概念上更复杂，而 DDO (Directive Defined Object) 则被取消了

2.0 中 Directive 还在，但在视频中我们可以看到 Directive 暂时被分为了三种：

- Component Directive
- Template Directive
- Decorator Directive

代码示例：

	@ComponentDirective({...})
	class Todo {}

	@TemplateDirective({ ... })
	class NgRepeat { ... }

	@DecoratorDirective({ ... })
	class NgClass { ... }

其中组件指令应该对应被砍掉的 contollers，而关注 dom 变化的被归类为模板指令，装饰指令则对应样式变化和动画。

参考以上的代码你可以看到，由于采用了面向对象的写法，以前写的 directive 将不能在 2.0 中使用...

## 去掉 jqLite

2.0 追求更现代的浏览器和 ECMAScript6 规范，鼓励直接使用原生api操作，也就没有必要使用 jQuery 来兼容各浏览器差异。

至于 IE 能兼容到什么版本，我个人猜测 IE10 应该是没问题的。

## 框架本身采用了 AtScript 开发

AtScript 是 TypeScript 的超集，除了拥有类型之外，她还在 TypeScript 的基础上加入了注解。

虽然框架并不一定需要搭配 AtScript 进行开发，但 AtScript 并不像 CoffeeScript，而且目前还没看到使用原生 JavaScript 的示例。

## 不再采用 angular.module

或许是因为 AtScript 提供了更好的模块管理功能，2.0 将不再支持 angular.module 方式管理模块，而是采用类似 python 的方式：

import {TodoService} form './todo_service';

## 1.3 是否还会维护

根据 Brad Green 的回答，距离 2.0 发布大约还需要一年半到两年的时间，在这段时间内还会为 1.3 提供补丁....

## 最后

目前 2.0 还在快速迭代中，很多东西并没有最终定下来。不过我认为后面会为平滑升级做文章应该不太可能了，因为2.0弱化了MVVM而强调了组件化的概念，这个概念在 polymer 和 react 中已经得到了证明： 前端组件化是趋势

- 相关文章：[AngularJS 2.0细节披露](http://www.infoq.com/cn/news/2014/11/angular-2-atscript?utm_source=infoq&utm_medium=popular_links_homepage)
- 相关视频：[油管](https://www.youtube.com/watch?v=gNmWybAyBHI&spfreload=10)