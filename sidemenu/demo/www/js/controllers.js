angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '默认方式', id: 1 },
    { title: '自定义返回且无右侧按钮', id: 2 },
    { title: '自定义返回和右侧按钮', id: 3 }
  ];
	
	$scope.$on('$viewContentLoaded', function(e, d) {
	  console.log('PlaylistsCtrl viewContentLoaded......');
	
		// var right_btn = document.getElementsByTagName('div').hasClass('right-buttons');
		if(d.url == "/app/playlists"){
			var back_btn = document.getElementsByTagName('ion-nav-bar')[0];	
		
			var right_btn = angular.element(back_btn).find('div')[1];
			angular.element(right_btn).html('');
		}

	});
})

.controller('PlaylistCtrl', function($scope, $stateParams,$ionicNavBarDelegate,$compile) {
 	$scope.right_click = function(){
 		alert('right_click');
 	}
	var i = $compile("<button ng-click='right_click()'>right</button>")($scope);
	
	$scope.setNavTitle = function(title) {
    $ionicNavBarDelegate.setTitle(title);
  }

	$scope.$on('$viewContentLoaded', function(e, d) {
		console.log('PlaylistCtrl viewContentLoaded......');
		
		if(d.url == "/app/playlists/3"){	
			var back_btn = document.getElementsByTagName('ion-nav-back-button')[0];	
			angular.element(back_btn).html('<i class="icon ion-ios7-arrow-back"></i>自定义左侧按钮');
		
			var right_btn = angular.element(back_btn).parent().find('div')[1];
			angular.element(right_btn).html('').append(i);
		}else if(d.url == "/app/playlists/2"){
			var back_btn = document.getElementsByTagName('ion-nav-back-button')[0];	
			angular.element(back_btn).html('<i class="icon ion-ios7-arrow-back"></i>返回');
			
			var right_btn = angular.element(back_btn).parent().find('div')[1];
			angular.element(right_btn).html('').html('');
			
		}else{
			var back_btn = document.getElementsByTagName('ion-nav-back-button')[0];	
			angular.element(back_btn).html('<i class="icon ion-ios7-arrow-back"></i>Back');
			
			var right_btn = angular.element(back_btn).parent().find('div')[1];
			angular.element(right_btn).html('').html('');
		}

	});
	 
})

