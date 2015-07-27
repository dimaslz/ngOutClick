(function(module) {
  module.config(function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: {
        pageTitle: 'ngOutClick'
      }
    });
  });

  module.controller('HomeCtrl', function($scope, $log) {
    // Dropdown ---------------------------------------------------
    $scope.showText = true;
    $scope.options = [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }];
    $scope.currentOption = $scope.options[0];

    $scope.toggleEdit = function() {
      $scope.showText = !$scope.showText;
    };

    $scope.selectOption = function(option) {
      $scope.currentOption = option;
    };

    // Example text on div element
    $scope.textExample1 = 'DEFAULT TEXT EXAMPLE 1';
    $scope.textExample2 = 'DEFAULT TEXT EXAMPLE 2';
    $scope.clickOnExample1 = function() {
      $scope.textExample1 = 'CLICK ON EXAMPLE 1';
    };

    $scope.outClickChangeExampleText1Callback = function() {
      $scope.textExample1 = 'OUTSIDE CLICK ON EXAMPLE 1';
    };

    $scope.changeExampleText1Init = function() {
      $scope.textExample1 = 'OVERRIDE BY INIT ON EXAMPLE 1';
    };

    // Example 2
    $scope.clickOnExample2 = function() {
      $scope.textExample2 = 'CLICK ON EXAMPLE 2';
    };

    $scope.outClickChangeExampleText2Callback = function() {
      $scope.textExample2 = 'OUTSIDE CLICK ON EXAMPLE 2';
    };

    // Dropdown events
    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  });
}(angular.module('ngOutClick.home', [
  'ui.router',
  'outClick'
])));
