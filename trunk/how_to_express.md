Title: 正确的Node.js Express app入门(翻译)
Tags: design pattern, php, singleton
Category: translate

Matthew Nuzum —  June 21, 2013 — 11 Comments

[原文地址](http://www.bearfruit.org/2013/06/21/start-a-new-node-js-express-app-the-right-way/)

Node.js是极其流行的，且毫无疑问你可以用它可以做任何你见过的不可思议的工作。由于很多新鲜东西，所以入门会比较复杂一些：Node.js是灵活，强大的工具，它可以用于构建很多不同类型的项目，从服务器端应用到网站，到工具，几乎无所不能。当然，它还只是一个迅速串红的新兴的工具，同样一件事儿可以有非常多的办法去做，很难去说会用到什么工具或者流程。

在 Node.js
web开发社区有一件事是确定的，有2个经常用于构建新的web应用的库，它们分别是connect
和express。[Connect是底层工具](http://www.senchalabs.org/connect/)让你可以使用http协议或者其他网络协议进行会话。
[Express让构建好的网站更加简单](http://expressjs.com/)
，而且它是构建于Connect库之上的。

接下来我会给你们展示几个技巧，我发现的，可以帮助你们入Express的门，希望以此加快你使用Node构建web应用的速度，我也会通过这个教程作为我已发布的其他教程的入口，我不想告诉你它很难，相反我是试图帮你理解如何处理好。
？

当我们学完，我们会有一个express应用，它有 [Less](http://lesscss.org/),
sessions, [test runner](http://visionmedia.github.io/mocha/)
和当文件变动会
[自动reload](https://github.com/isaacs/node-supervisor)的功能.
在此之前，[请确保你已经安装了Node.js和npm](http://www.bearfruit.org/2013/06/19/how-to-install-node-js-successfully/).

Update: Check out an [even better template option for Express
apps](http://www.bearfruit.org/2013/08/22/a-better-template-engine-for-express-apps/).


我们从[npm, the Node package manager
tool](https://npmjs.org/)开始。当你安装完Node.js后，你可能与此同时已经有了npm。之前曾说过Express是Node.js社区里非常稳定的，而npm是一个更加稳定的，极其少的情况下找一个项目是不依赖它的。

当你创建一个项目的时候，你会创建一个名为package.json的文件，它描述了你的项目和更多重要的易于npm安装你的项目依赖的配置。如你所料，项目使用Express会依赖Express
npm模块。


当你通过npm安装一个库，它会安装到项目里你当前所在的目录下，一个名为node_modules的文件。如果你有2个项目，且安装同样的express的时候，这并不意味着你能在不同的项目里使用它们。每个都会独立其他项目有自己的模块。Ruby和Python社区试着放到一起，因为对于早期已存在的部分，它们不会有这样的工具，而Node社区私活从这个挑战有所借鉴，面对和在最初的计划里来避免这些。？


有一种办法来安装node模块，系统范围内，不论如何都可以使用。不使用package.json，我们会通过特殊命令行来安装。现在我们要安装express，我也用下面的命令行工具：

为了做此，必须在控制台可以访问npm，然后使用下面这个命令：

    npm install -g express


如果你用Mac或者Linux会得到一个权限拒绝的错误，之后需要使用`use sudo npm
install -g
express`，这会提示你输入密码，继而此工具才能安装相应安装包。如果你输入了密码，当你使用-g参数的时候，你会经常不得不使用sudo的。

那么到底-g做什么呢？它会全局安装相应安装包的。如果没有使用-g，那么你会在当前所在文件夹里，你会看到新创建的名为node_modules的文件夹，它会安装在node_modules文件夹里。

I learned this the hard way when I was preparing for a flight and a few
hours of working offline. I downloaded all the tools I thought I’d need
but didn’t use -g. To this day I don’t know what folder I was in but
needless to say, I ended up just reading a book during that flight. :-)


现在我们有了全局安装的express，我们可以创建一个新的项目了。在终端里创建一个文件夹，切换到此文件夹。你可以在这个文件夹里。比如：


Mac/Linux/Windows:

mkdir ExpressProject; cd ExpressProjectressProject


现在你已经在你的新文件夹里了，我们会使用express命令来把它转成一个Express项目。

输入`express -h`后敲回车会看到选项列表。
如果你只是敲了express并敲了回车，你会创建一个新的全是默认配置的项目。

我使用的命令是：

```
express -s -H -c less
```

在使用之前，让我来告诉ä=SuperTab('n')
   他们都是干什么的吧：

- `-s` 意思是增加sessions支持,
- `-H` 意思是使用[`Hogan.js template
  library`](http://twitter.github.io/hogan.js/), 此库依赖于
[`Mustache`](http://mustache.github.io/mustache.5.html),
- -c less 意思是使用Less，这个css preprocessor（预处理器）。

一个非常流行的-H配置项是使用[`Jade`](http://jade-lang.com/)，它是默认项。所以如果你没有设置`-H`
或 `-e` ([`ejs`](https://github.com/visionmedia/ejs)) 或 `-J`
([`JSHtml`](http://james.padolsey.com/javascript/introducing-jshtml/))
你就会默认使用Jade的。本教程里我将在我的网站上使用Hogan.js。

如果你喜欢CSS，但是希望它可以有点更强大，此时Less无疑是一个非常好的选择。如果仅仅是写普通的CSS，你只需要给它一个`.less`扩展名，这个应用会自动为你把它转成CSS的。

如果你不喜欢CSS，希望你的样式看起来有点想Python或者Ruby，你可能更喜欢
`-c stylus`选项来增加 Stylus
support//learnboost.github.io/stylus/”>Stylus
support.本教程所做的网站会使用Less或者普通的CSS。


如果你所在的当前目录不为空，此时使用express命令会引起错误的。它会询问你想如何处理，他还重写相同的所有文件的。遇到此种情况的时候你可以输入“yes”
or “no”


至此我们已经有一个express基础应用了，我们需要去安装它的依赖库。输入`npm
install`
，并查看屏幕滚动，模块会被下载和安装。你会看到警告，可以无视。如果你看到错误，npm会停止的。


现在我们可以运行我们的测试应用，并保证它是正常可用的。输入 `npm start`
开始。


如果你用的是Windows，你可能会看到防火墙警告信息如下：

![](http://www.bearfruit.org/files/2013/06/e5b12b50-538a-47bf-9cf7-11d7a7ae5ab3.png)

我建议把第一个选项选中，并点击“Allow
access”。如果不这样做的话，你无法在本地简化开发的。如果你经常在咖啡厅或者机场或者其他工作场所，或者可能使用移动设备上测试，此时的网络场景下，你需要保证第二个选项也选中。



无论你用什么样的操作系统，之后你都会看到一条消息，Express会监听3000端口。访问
[http://localhost:3000/](http://localhost:3000/)就可以看到你的应用了。需要说明的是Internet
Explorer
下你必须在最开始的地方输入`http://`。如果你使用IE浏览器，你也可能看到下面这个弹出框：

![](http://www.bearfruit.org/files/2013/06/4daae001-35d3-4243-bf36-dcab0306fa5a.png)

我会选 “Yes” ，因为我想有更多访问。我相信自己本地跑的代码。

现在你会看到基本上空的web页面上写着“Express, Welcome to Express”

现在，我们开始定制吧。别怕，很简单的！

回到终端里，按下 `ctrl+C`
来终止Node.js服务器。现在，使用一个代码编辑器如Sublime Text, Notepad++,
gEdit or Text
Wrangler等任意一个，打开package.json。如扩展名所示，这是一个Json文档。他看起来像Javascript。注意下面这段是控制依赖的：


```
  "dependencies": {
    "express": "3.2.6",
    "hjs": "*",
    "less-middleware": "*"
  }
```

我们需要做的是在此处增加一些东西来让我们的app更好。尤其是我们要增加代码测试运行器和当文件变动后自动重载app的功能。

我们会在express之前增加如下行：

```
  "mocha": "*",
  "chai": "*",
  "sinon": "*",
  "supervisor": "*",
```

结果如下：

```
 "dependencies": {
     "mocha": "*",
     "chai": "*",
     "sinon": "*",
     "supervisor": "*",
     "express": "3.x",
     "hjs": "*",
     "less-middleware": "*"
 }
```

请注意每一个都必须以逗号结束，最后一行除外。一旦你这做了，保存变更，并退出编辑器。

返回到你的终端，使用`npm
install`来安装新的依赖。等待所有新的依赖加载完成。

我们要安装是supervisor，它是Node.js启动检查文件变动的，当他们变动了，它就会自动重载本地服务器。当你经常变动和预览结果的时候，这是非常有用的。然后如果你工作在一个需要在内存里存储信息的应用的时候，当你需要重启应用的时候，一定要注意，它也是会刷新内存的。

我们已经安装了Mocha test runner,  [chai assertion
library](http://chaijs.com/) 和 the [sinon mocking/stubbing
library](http://sinonjs.org/)。它们都是帮助你测试代码的。


让我们来测试一下新功能吧。从supervisor开始。

Mac/Linux: `./node_modules/.bin/supervisor app.js`

Windows: `node_modules\.bin\supervisor app.js`

你会再次看到的你的“Express server listening on port
3000″。在浏览器里确保它是正常运行的。

假设正常运行，让我们把它当成默认的，再次编辑你的package.json文件，注意“scripts”
部分。此时改为如下：

```
  "scripts": {
    "start": "node app.js"
  },
```

之前用的命令放到引号中。注意windows用户要增加额外的`\`。你最终的结果应如下：

Mac/Linux:

```
  "scripts": {
    "start": "./node_modules/.bin/supervisor app.js"
  },
```

Windows: (note the double \\)

```
  "scripts": {
    "start": "node_modules\\.bin\\supervisor app.js"
  },
```

现在保存并退出，返回到终端里，输入`npm start`来启动你的应用。

棒极了，让我们来做些测试吧。创建一个名为test的文件夹，并创建一个名为test.js的新文件。在你的代码编辑器里编辑此文件，增加如下代码：


```
var assert = require('chai').assert;
var routes = require('../routes');

suite('Routes', function() {
     test("index route is defined", function() {
          assert.isDefined(routes.index);
     })
})
```

现在可以保存和关闭文件了。通过运行如下命令来测试：

Mac/Linux: `./node_modules/.bin/mocha -u tdd`

Windows: `node_modules\.bin\mocha -u tdd`

你会看到一行绿色消息说1个通过

我们来让生活更精简一点，编辑你的package.json文件，找到“start”行并复制它。保证第一行后面有逗号哦。修改第二个配置项，从
“start” 改为
“test”，之后使用此命令来覆盖引号里的命令。你应该和下面一模一样才对：

Mac/Linux:

```
  "scripts": {
    "start": "./node_modules/.bin/supervisor app.js",
    "test": "./node_modules/.bin/mocha -u tdd"
  },
```

Windows: (note the double \\)

```
  "scripts": {
    "start": "node_modules\\.bin\\supervisor app.js",
    "test": "node_modules\\.bin\\mocha -u tdd"
  },
```

现在保存并退出，让我们来使用`npm
test`来测试吧.你会得到和之前测试一样的结果。


我们做的是创建一个test目录，并在它里面创建一个带有单一测试套件的测试文件，并且在此套件里有一个测试。

如果你喜欢的话，你可以在“watch”支持的尾部增加`-w`。这会导致它每一次文件变动都重跑一次测试。

简单说明一下，chai库支持3种不同的assertion框架。我更喜欢[jUnit style TDD
assertions](http://chaijs.com/api/assert/)。一些人更喜欢BDD样式的assertions，而其他人喜欢expect样式的。自己选择吧。


至此，已经没有什么可以阻挡你了。你可以编辑routes/index.js文件来给你的主页增加一些默认行为，或放置public/目录下的静态文件可直接使用。例如，你可以创建一个新的html文件保存为public/new.html，之后访问http://localhost:3000/new.html瞧瞧看吧。

不要忘记了你的测试。你可以给已有测试套件增加更多测试或创建一个附加测试套件的新文件。

更新说明：在你学习更加深入之前，请查阅[even better template option for
Express
apps](http://www.bearfruit.org/2013/08/22/a-better-template-engine-for-express-apps/).

为了便于参考，下面是我的最终版本的package.json文件。这是Windows下的例子哦：

```
{
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node_modules\\.bin\\supervisor app.js",
    "test": "node_modules\\.bin\\mocha -u tdd"
  },
  "dependencies": {
     "mocha": "*",
     "chai": "*",
     "sinon": "*",
     "supervisor": "*",
     "express": "3.x",
     "hjs": "*",
     "less-middleware": "*"
  }
}
```

## Matthew Nuzum

Web guy, big thinker, loves to talk and write. Front end web, mobile and
UX developer for John Deere ISG. My projects: @dsmwebgeeks @tekrs
@squaretap ✝
