(function(module) {
  module.config(function config($stateProvider) {
    $stateProvider.state('example', {
      url: '/example',
      views: {
        "main": {
          controller: 'ExampleCtrl',
          templateUrl: 'example/example.tpl.html'
        }
      },
      data: {
        pageTitle: 'ngOutClick'
      }
    });
  });

  module.controller('ExampleCtrl', function($scope, $log) {
    /*
    * Examples
    */
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
    // events
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

    // Example text on div element
    $scope.textExample1 = 'DEFAULT TEXT EXAMPLE 1';
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
    $scope.textExample2 = 'DEFAULT TEXT EXAMPLE 2';
    $scope.clickOnExample2 = function() {
      $scope.textExample2 = 'CLICK ON EXAMPLE 2';
    };

    $scope.outClickChangeExampleText2Callback = function() {
      $scope.textExample2 = 'OUTSIDE CLICK ON EXAMPLE 2';
    };

  });
}(angular.module('example.ngOutClick.example', [
  'ui.router',
  'ngOutClick',
  'ui.bootstrap'
])));
