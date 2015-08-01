(function(module) {
    module.config(function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/example' );
    });

    module.run( function run () {
    });

    module.controller( 'AppCtrl', function ( $scope, $location ) {
      $scope.goToSection = function(x) {
        console.log('dfasdfasdf');
        $location.hash(x);
      };

      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
          if ( angular.isDefined( toState.data.pageTitle ) ) {
              $scope.pageTitle = toState.data.pageTitle;
          }
      });
    });

}(angular.module('example.ngOutClick', [
    'templates-app',
    'templates-components',
    'example.ngOutClick.example',
    'ui.router'
])));
