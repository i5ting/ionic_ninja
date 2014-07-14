// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('CheckboxSimpleCtrl', function($scope) {
  $scope.pizza = {
    pepperoni: true,
    sausage: false,
    anchovies: true,
    jalapenos: false
  };

  $scope.toppings = function() {
    var toppings = Object.keys($scope.pizza).filter(function(flavor) {
      return $scope.pizza[flavor];
    });
    if (toppings.length > 1) {
      toppings[toppings.length - 1] = 'and ' + toppings[toppings.length - 1];
    }
    if (toppings.length > 2) {
      return toppings.join(', ');
    } else if (toppings.length) {
      return toppings.join(' ');
    } else {
      return 'nothing';
    }
  };
});