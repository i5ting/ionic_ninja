# AngularJS中serivce,factory,provider的区别

AngularJS实现注入服务的方法有5种方式：

- decorator
- constant 
- value
- service
- factory
- provider

其中provider是一切方法的基础，有点类似于XMLHttpObject，在这个基础之上建立起来的，像jquery的$.ajax等等。

## 第一种方式：decorator

	<div ng-controller="appCtrl">{{ content }}</div>

	<script type="text/javascript">
	    var app = angular.module('myApp', []);
	    app.value('profile', 'I\'am a angular developer.');
	    app.config(function ($provide) {
	        $provide.decorator('profile', function ($delegate) {
	            return $delegate + ' I like angularJS. So sorry, you are hacked!';
	        });
	    });

	    app.controller('appCtrl', ['$scope', 'profile', function ($scope, profile) {
	        $scope.content = profile;
	    }]);
	</script>


## 第二种方式：constant 

	<div ng-controller="UsingConstantServiceCtrl">{{ magicNumber }},{{ bookTitle }}</div>
	<div ng-controller="UsingValueServiceCtrl">{{ magicNumberFromService }}</div>

	<script type="text/javascript">
	    var app = angular.module('myApp', []);

	    app.constant('magicNumber', 42);//常量直接接作为服务
	    app.constant('magicNumber', 422);//TODO 重新赋值是无效的
	    app.constant('bookTitle', "Hitchhiker's Guide");

	    function UsingConstantServiceCtrl($scope, magicNumber, bookTitle) {
	        $scope.magicNumber = magicNumber;
	        $scope.bookTitle = bookTitle;
	    }

	    (function () {
	        var existingServiceInstance = {
	            getMagicNumber: function () {
	                return 42; // Note that we are using an "hard-coded" magic number
	            }
	        };
	        app.value('magicNumberService', existingServiceInstance);
	    }());

	    function UsingValueServiceCtrl($scope, magicNumberService) {
	        $scope.magicNumberFromService = magicNumberService.getMagicNumber();
	    }
	</script>
	
## 第三种方式：value

	<div ng-controller="appCtrl">{{ title }}</div>

	<script type="text/javascript">
	    var app = angular.module('myApp', []);
	    app.config(function ($provide) {
	        $provide.value('title', 'my Title')
	    });
	    app.controller('appCtrl', ['$scope', 'title', function ($scope, title) {
	        $scope.title = title;
	    }]);
	</script>


##  第四种方式：service


	<div ng-controller="UsingValueServiceCtrl">{{ magicNumberFromService }}</div>

	<script type="text/javascript">
	    var app = angular.module('myApp', []);

	    app.constant('magicNumber', 42);//常量直接接作为服务

	    (function() {
	        var MyService = function(magicNumber) { // "magicNumber" is injected
	            this.getMagicNumber = function() {
	                return magicNumber;
	            };
	        };

	        app.service('magicNumberService', MyService);
	    }());

	    function UsingValueServiceCtrl($scope, magicNumberService) {
	        $scope.magicNumberFromService = magicNumberService.getMagicNumber();
	    }
	</script>
	
	
## 第五种方式：factory

	<div ng-controller="UsingValueServiceCtrl">{{ magicNumberFromService }}</div>


	<script type="text/javascript">
	    var app = angular.module('myApp', []);


	    app.constant('magicNumber', 42);//常量直接接作为服务


	    (function () {
	        // registers a service factory with "magicNumber" injected
	        app.factory('magicNumberService', function (magicNumber) {
	            return {
	                getMagicNumber: function () {
	                    return magicNumber;
	                }
	            };
	        });
	    }());


	    function UsingValueServiceCtrl($scope, magicNumberService) {
	        $scope.magicNumberFromService = magicNumberService.getMagicNumber();
	    }
	</script>
	
## 第六种方式：provider

	<div ng-controller="UsingValueServiceCtrl">{{ magicNumberFromService }}</div>

	<script type="text/javascript">
	    var app = angular.module('myApp', []);

	    app.constant('magicNumber', 42);//常量直接接作为服务

	    (function() {
	        var MyService = function(magicNumber) { // "magicNumber" is injected
	            this.getMagicNumber = function() {
	                return magicNumber;
	            };
	        };

	        app.service('magicNumberService', MyService);
	    }());

	    function UsingValueServiceCtrl($scope, magicNumberService) {
	        $scope.magicNumberFromService = magicNumberService.getMagicNumber();
	    }
	</script>
	
	