# 自己写 angularjs inject


当你用AngularJS写的应用越多, 你会越发的觉得它相当神奇. 之前我用AngularJS实现了相当多酷炫的效果, 所以我决定去看看它的源码, 我想这样也许我能知道它的原理. 下面是我从源码中找到的一些可以了解AngularJS那些高级(和隐藏)功能如何实现的代码.

## 1) 依赖注入的实现原理

依赖注入(DI)让我们可以不用自己实例化就能创建依赖对象的方法. 简单的来说, 依赖是以注入的方式传递的. 在Web应用中， Angular让我们可以通过DI来创建像Controllers和Directives这样的对象. 我们还可以创建自己的依赖对象, 当我们要实例化它们时, Angular能自动实现注入.

最常见的被注入对象应该是 $scope 对象. 它可以像下面这样被注入的:

	function MainCtrl ($scope) {
	  // access to $scope
	}
	angular
	  .module(‘app’)
	  .controller(‘MainCtrl’, MainCtrl);
	
对于从来没有接触过依赖注入的Javascript开发人员来说, 这样看起来只是像传递了一个参数. 而实际上, 他是一个依赖注入的占位符. Angular通过这些占位符, 把真正的对象实例化给我们, 让来看看他是怎么实现的.

## function的参数

当你运行你代码的时候, 如果你把function声明中的参数换成一个其它字母, 那么Angular就无法找到你真正想实例化的对象. 因为Angular在我们的function上使用了 toString() 方法, 他将把我们的整个function变成一个字符串， 然后解析function中声明的每一个参数. 它使用下面4个正则(RegExps)来完成这件事情.

	var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
	var FN_ARG_SPLIT = /,/;
	var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

Angular做的第一件事情就是把我们的整个function转换为字符串, 这确实是Javascript很强大的地方. 转换后我们将得到如下字符串:

	‘function MainCtrl ($scope) {...}’

然后, 他用正则移除了在 function() 中有可能的所有的注释.

	fnText = fn.toString().replace(STRIP_COMMENTS, '');
	
接着它提取其中的参数部分.

	argDecl = fnText.match(FN_ARGS);
	
最后它使用 .split() 方法来移除参数中的所有空格, 完美! Angular使用一个内部的 forEach 方法来遍历这些参数, 然后把他们放入一个 $inject 数组中.

	forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
	  arg.replace(FN_ARG, function(all, underscore, name) {
	    $inject.push(name);
	  });
	});

正如你现在想的, 这是一个很大的性能开销操作. 每个函数都要执行4个正则表达式还有大量的转换操作----这将给我们带来性能损失. 不过我们可以通过直接添加需要注入的对象到 $inject 数组中的方式来避免这个开销.

## $inject

我们可以在function对象上添加一个 $inject 属性来告诉Angular我们的依赖对象. 如果对象是存在的, Angular将实例化它. 这样的语法更具有可读性, 因为我们可以这些对象是被注入的. 下面是一个例子:

function SomeCtrl ($scope) {

}

SomeCtrl.$inject = ['$scope'];

angular
  .module('app', [])
  .controller('SomeCtrl', ['$scope', SomeCtrl]);
这将节省框架的大量操作, 它不用再解析function的参数, 也不用去操作数组(查看下一节数组参数), 它可以直接获取我们已经传递给他的 $inject 属性. 简单, 高效.

理想情况下我们应该使用构建工具, 比如 Grunt.js 或者 Gulp.js 来做这个事情: 让他们在编译时生成相应的 $injext 属性, 这样能让Web应用运行的更快.

注: 实际上上面介绍的内容并不涉如何实例化那些需要被注入的对象. 整个操作只是标记出需要的名字----实例化的操作将由框架的另一部分来完成.

## 数组参数

最后要提到的是数组参数. 数组的前面每个元素的名字和顺序, 刚是数组最后一个元素function的参数名字和顺序. 比如: [‘$scope’, function ($scope) {}].

这个顺序是非常重要的, 因为Angular是以这个顺序来实例化对象. 如果顺序不正确, 那么它可能将其它对象错误的实例化到你真正需要的对象上.

function SomeCtrl ($scope, $rootScope) {

}

angular
  .module('app', [])
  .controller('SomeCtrl', ['$scope', ‘$rootScope’, SomeCtrl]);
像上面一样, 我们需要做的就是把函数最为数组的最后一个元素. 然后Angular会遍历前面的每一个元素, 把它们添加到 $inject 数组中. 当Angular开始解析一个函数的时候, 它会先检查目标对象是不是一个数组类型, 如果是的话, 他将把最后一个元素作为真正的function, 其它的元素都作为依赖对象添加到 $inject 中.

} else if (isArray(fn)) {
  last = fn.length - 1;
  assertArgFn(fn[last], 'fn');
  $inject = fn.slice(0, last);
}
## 2) Factory和Service

Factory和Service看起来非常相似, 以至于很多开发人员都无法理解它们有什么不同.

当实例化一个 .service() 的时候, 其实他将通过调用 new Service() 的形式来给我们创建一个新的实例, .service() 的方法像是一个构造函数.

服务(service)实际上来说是一个最基本的工厂(factory), 但是它是通过 new 来创建的, 你需要使用 this 来添加你需要的变量和函数, 最后返回这个对象.

工厂(factory)实际上是非常接近面向对象中的"工厂模式(factory pattern)". 当你调用时, 它会创建新的实例. 本质上来说, 那个实例是一个全新的对象.

下面是Angular内部实际执行的源码:

  function factory(name, factoryFn) { return provider(name, { $get: factoryFn }); }

  function service(name, constructor) {
    return factory(name, ['$injector', function($injector) {
      return $injector.instantiate(constructor);
    }]);
  }
	
## 3) 从 $rootScope 中创建新的 $scope

所有的scope对象都继承于 $rootScope, $rootScope 又是通过 new Scope() 来创建的. 所有的子scope都是用过调用 $scope.$new() 来创建的.

	var $rootScope = new Scope();

它内部有一个 $new 方法, 让新的scope可以从原型链上引用它们的父scope, 子scope(为了digest cycle), 以及前后的scope.

从下面的代码可以看出, 如果你想创建一个独立的scope, 那么你应该使用 new Scope(), 否则它将以继承的方式来创建.

我省略了一些不必要的代码, 下面是他的核心实现

  $new: function(isolate) {
    var child;

    if (isolate) {
      child = new Scope();
      child.$root = this.$root;
    } else {
      // Only create a child scope class if somebody asks for one,
      // but cache it to allow the VM to optimize lookups.
      if (!this.$$ChildScope) {
        this.$$ChildScope = function ChildScope() {
          this.$$watchers = null;
        };
        this.$$ChildScope.prototype = this;
      }
      child = new this.$$ChildScope();
    }
    child['this'] = child;
    child.$parent = this;
    return child;
  }
	
理解这一点对写测试非常重要, 如果你想测试你的Controller, 那么你应该使用 $scope.$new() 来创建$scope对象. 明白scope是如何创建的在测试驱动开发(TDD)中是十分重要的, 这将更加有助于你mock module.

## 4) Digest Cycle

digest cycle的实现其实就是我们经常看到的 $digest 关键字, Angular强大的双向绑定功能依赖于它. 每当一个model被更新时他都会运行, 检查当前值, 如果和以前的不同, 将触发listener. 这些都是脏检查(dirty checking)的基础内容. 他会检查所有的model, 与它们原来的值进行比较, 如果不同, 触发listener, 循环, 直到不在有变化为止.

	$scope.name = 'Todd';

	$scope.$watch(function() {
	    return $scope.name;
	}, function (newValue, oldValue) {
	    console.log('$scope.name was updated!');
	} );

当你调用 $scope.$watch 的时候, 实际上干了2件事情. watch的第一个参数是一个function, 这个function的返回你想监控的对象(如果你传递的是一个string, Angular会把他转换为一个function). digest cycle 运行的时候, 它会调用这个function. 第二个参数也是一个function, 当第一个function的值发生变化的时候它会被调用. 让我们看看他是怎么实现监控的:

	$watch: function(watchExp, listener, objectEquality) {
	    var get = $parse(watchExp);

	    if (get.$$watchDelegate) {
	      return get.$$watchDelegate(this, listener, objectEquality, get);
	    }
	    var scope = this,
	        array = scope.$$watchers,
	        watcher = {
	          fn: listener,
	          last: initWatchVal,
	          get: get,
	          exp: watchExp,
	          eq: !!objectEquality
	        };

	    lastDirtyWatch = null;

	    if (!isFunction(listener)) {
	      watcher.fn = noop;
	    }

	    if (!array) {
	      array = scope.$$watchers = [];
	    }
	    // we use unshift since we use a while loop in $digest for speed.
	    // the while loop reads in reverse order.
	    array.unshift(watcher);

	    return function deregisterWatch() {
	      arrayRemove(array, watcher);
	      lastDirtyWatch = null;
	    };
	  }
	
这个方法将会把参数添加到scope中的 $$watchers 数组中, 并且它会返回一个function, 以便于你想结束这个监控操作.

然后digest cycle会在每次调用 $scope.$apply 或者 $scope.$digest 的时候运行. $scope.$apply 实际上是一个rootScope的包装, 他会从根$rootScope向下广播. 而 $scope.$digest 只会在当前scope中运行(并向下级scope广播).

	$digest: function() {
	    var watch, value, last,
	        watchers,
	        asyncQueue = this.$$asyncQueue,
	        postDigestQueue = this.$$postDigestQueue,
	        length,
	        dirty, ttl = TTL,
	        next, current, target = this,
	        watchLog = [],
	        logIdx, logMsg, asyncTask;

	    beginPhase('$digest');

	    lastDirtyWatch = null;

	    do { // "while dirty" loop
	      dirty = false;
	      current = target;

	      traverseScopesLoop:
	      do { // "traverse the scopes" loop
	        if ((watchers = current.$$watchers)) {
	          // process our watches
	          length = watchers.length;
	          while (length--) {
	            try {
	              watch = watchers[length];
	              // Most common watches are on primitives, in which case we can short
	              // circuit it with === operator, only when === fails do we use .equals
	              if (watch) {
	                if ((value = watch.get(current)) !== (last = watch.last) &&
	                    !(watch.eq
	                        ? equals(value, last)
	                        : (typeof value === 'number' && typeof last === 'number'
	                           && isNaN(value) && isNaN(last)))) {
	                  dirty = true;
	                  lastDirtyWatch = watch;
	                  watch.last = watch.eq ? copy(value, null) : value;
	                  watch.fn(value, ((last === initWatchVal) ? value : last), current);
	                  if (ttl < 5) {
	                    logIdx = 4 - ttl;
	                    if (!watchLog[logIdx]) watchLog[logIdx] = [];
	                    logMsg = (isFunction(watch.exp))
	                        ? 'fn: ' + (watch.exp.name || watch.exp.toString())
	                        : watch.exp;
	                    logMsg += '; newVal: ' + toJson(value) + '; oldVal: ' + toJson(last);
	                    watchLog[logIdx].push(logMsg);
	                  }
	                } else if (watch === lastDirtyWatch) {
	                  // If the most recently dirty watcher is now clean, short circuit since the remaining watchers
	                  // have already been tested.
	                  dirty = false;
	                  break traverseScopesLoop;
	                }
	              }
	            } catch (e) {
	              $exceptionHandler(e);
	            }
	          }
	        }

	      } while ((current = next));

	      // `break traverseScopesLoop;` takes us to here

	      if((dirty || asyncQueue.length) && !(ttl--)) {
	        clearPhase();
	        throw $rootScopeMinErr('infdig',
	            '{0} $digest() iterations reached. Aborting!\n' +
	            'Watchers fired in the last 5 iterations: {1}',
	            TTL, toJson(watchLog));
	      }

	    } while (dirty || asyncQueue.length);

	    clearPhase();

	    while(postDigestQueue.length) {
	      try {
	        postDigestQueue.shift()();
	      } catch (e) {
	        $exceptionHandler(e);
	      }
	    }
	  }
	
这个实现非常有才, 虽然我没有进去看它是如何向下级广播的, 但这里的关键是循环遍历 $$watchers, 执行里面的函数(就是那个你通过 $scope.$watch 注册的第一个function), 然后如果得到和之前不同的值, 他又将调用listener(那个你传递的第二个function). 然后, 砰! 我们得到了一个变量发生改变的通知. 关键是我们是如何知道一个值发生变化了的? 当一个值被更新的时候digest cycle会运行(尽管它可能不是必须的). 比如在 ng-model 上, 每一个keydown事件都会触发digest cycle.

	$scope.$apply

当你想在Angular框架之外做点什么的时候, 比如在 setTimeout 的方法里面你想让Angular知道你可能改变了某个model的值. 那么你需要使用 $scope.$apply, 你把一个function放在它的参数之中, 那么他会在Angular的作用域运行它, 然后在 $rootScope 上调用 $digest. 它将向它下面所有的scope进行广播, 这将触发你注册的所有listeners和watchers. 这一点意味着Angular可以知道你更新了任何作用域的变量.

通过特征检查和闭包实现Polyfilling

Angular实现polyfilling的方式非常巧妙, 它不是用像 Function.prototype.bind 一样的方式直接绑定在一个对象的原型链上. Angular会调用一个function来判定浏览器是否支持这个方法(基础特征检查), 如果存在它会直接返回这个方法. 如果不存在, 他将使用一段简短的代码来实现它.

这样是比较安全的方式. 如果直接在原型链上绑定方法, 那么它可能会覆盖其它类库或者框架的代码(甚至是我们自己的代码). 闭包也让我们可以更安全的储存和计算那些临时变量, 如果存在这个方法, Angular将直接调用. 原生方法通常会带来极大的性能提升.

函数功能检查

Angular支持IE8+的浏览器(撰写本文时Angular版本是1.2.x), 这意味着它还是要兼容老的浏览器, 为它们提供那些没有的功能. 让我们来用 indexOf 来举例.

	function indexOf(array, obj) {
	  if (array.indexOf) return array.indexOf(obj);

	  for (var i = 0; i < array.length; i++) {
	    if (obj === array[i]) return i;
	  }
	  return -1;
	}

它直接取代了原来的 array.indexOf 方法, 它自己实现了indexOf方法. 但如果浏览器支持这个函数, 他将直接调用原生方法. 十分简单.

闭包

实现闭包可以用一个立即执行函数(IIFE). 比如下面这个 isArray 方法, 如果浏览器不支持这个功能, 它将使用闭包返回一个 Array.isArray 的实现. 如果 Array.isArray 是一个函数, 那么它将直接使用原生方法----又一个提高性能的方法. IIFE可以让我们十分的方便来封装一些东西, 然后只返回我们需要的内容.

	 var isArray = (function() {
	  if (!isFunction(Array.isArray)) {
	    return function(value) {
	      return toString.call(value) === '[object Array]';
	    };
	  }
	  return Array.isArray;
	})();

这就是我看的第一部分Angular源码, 第二部分将在下周发布.

原文: AngularJS: Looking under the hood [Part 1]
http://www.binpress.com/tutorial/angular-js-looking-under-the-hood/153
