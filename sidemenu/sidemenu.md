# Side Menu

	ionic start demo sidemenu
	ionic platform add ios
	ionic build ios
	ionic emulate ios

在浏览器中调试

```
➜  demo git:(master) ✗ ionic serve
Running serve task...
Running dev server at http://0.0.0.0:8100
Running live reload server at http://0.0.0.0:35729
```


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

