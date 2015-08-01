(function(module) {
    'use strict';
    module.directive("ngOutClick", function() {
        return {
            restrict: 'AE',
            scope: {
                outClickCallback: '&', // pass callback to excecute when click outside element
                outClickInit: '&', // pass method to excecute when init the directive
                outClickInitCount: '=' // pass to init count +1 for elements like dropdown (simulate one click)
            },
            link: function(scope, element) {
                var inside = false;
                var count = -1;

                if (scope.outClickInitCount) {
                    count++;
                }
                if (scope.outClickInit) {
                    scope.outClickInit();
                }

                document.addEventListener('click', function() {
                    count = count > -1 ? count + 1 : count;

                    if (!inside && count > 1) {
                        count = -1;
                        scope.outClickCallback();
                        scope.$apply();
                    }
                    inside = false;
                });

                element[0].addEventListener('click', function() {
                    inside = true;
                    count = 0;
                });
            }
        };
    });
}(angular.module('ngOutClick', [])));
