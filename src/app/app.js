(function(module) {
    module.config(function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
    });

    module.run( function run () {
    });

    module.controller( 'AppCtrl', function ( $scope, $location ) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle;
            }
        });
    });

}(angular.module('ngOutClick', [
    'templates-app',
    'templates-components',
    'ngOutClick.home',
    'ui.router'
])));
