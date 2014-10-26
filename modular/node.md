node.js的module.export 和 export方法的区别

原文：http://www.hacksparrow.com/node-js-exports-vs-module-exports.html

你肯定非常熟悉nodejs模块中的exports对象，你可以用它创建你的模块。例如：（假设这是rocker.js文件）

```
exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};
```

在另一个文件中你这样引用

```
var rocker = require('./rocker.js');
rocker.name(); // 'My name is Lemmy Kilmister'
```

那到底Module.exports是什么呢？它是否合法呢？

其实，Module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是Module.exports而不是exports。

所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是Module.exports本身不具备任何属性和方法。如果，Module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。

修改rocker.js如下：

```
module.exports = 'ROCK IT!';
exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};
```

再次引用执行rocker.js

```
var rocker = require('./rocker.js');
rocker.name(); // TypeError: Object ROCK IT! has no method 'name'
```

发现报错：对象“ROCK IT!”没有name方法

rocker模块忽略了exports收集的name方法，返回了一个字符串“ROCK IT!”。由此可知，你的模块并不一定非得返回“实例化对象”。你的模块可以是任何合法的javascript对象--boolean, number, date, JSON, string, function, array等等。

你的模块可以是任何你设置给它的东西。如果你没有显式的给Module.exports设置任何属性和方法，那么你的模块就是exports设置给Module.exports的属性。

下面例子中，你的模块是一个类：

```
module.exports = function(name, age) {
    this.name = name;
    this.age = age;
    this.about = function() {
        console.log(this.name +' is '+ this.age +' years old');
    };
};
```

可以这样应用它：

```
var Rocker = require('./rocker.js');
var r = new Rocker('Ozzy', 62);
r.about(); // Ozzy is 62 years old
```

下面例子中，你的模块是一个数组：

```
module.exports = ['Lemmy Kilmister', 'Ozzy Osbourne', 'Ronnie James Dio', 'Steven Tyler', 'Mick Jagger'];
```

可以这样应用它：

```
var rocker = require('./rocker.js');
console.log('Rockin in heaven: ' + rocker[2]); //Rockin in heaven: Ronnie James Dio
```

现在你明白了，如果你想你的模块是一个特定的类型就用Module.exports。如果你想的模块是一个典型的“实例化对象”就用exports。

给Module.exports添加属性类似于给exports添加属性。例如：

```
module.exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};
```

同样，exports是这样的

```
exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};
```

请注意，这两种结果并不想同。前面已经提到module.exports是真正的接口，exports只不过是它的辅助工具。推荐使用exports导出，除非你打算从原来的“实例化对象”改变成一个类型