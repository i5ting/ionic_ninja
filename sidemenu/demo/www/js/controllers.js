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
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
	
	// lt_nav_service.left_btn({});
})

.controller('PlaylistCtrl', function($scope, $stateParams,$ionicNavBarDelegate) {
	$ionicNavBarDelegate.setTitle('init set title');
	$scope.setNavTitle = function(title) {
    $ionicNavBarDelegate.setTitle(title);
  }
	
	$scope.$on('$viewContentLoaded', function(e, d) {
	  console.log('viewContentLoaded......');
		var back_btn = document.getElementsByTagName('ion-nav-back-button')[0];	
		angular.element(back_btn).text('你妹');
		
		// var right_btn = document.getElementsByTagName('div').hasClass('right-buttons');
		
		var right_btn = angular.element(back_btn).parent().find('div')[1];
		
		angular.element(right_btn).text('ss')
		console.log(right_btn);
		//angular.element(back_btn).text('你妹')；
	});
	 
})
