'use strict';

/**
 * @ngdoc directive
 * @name angularJustgageApp.directive:JustGage
 * @description
 * # JustGage
 */
angular.module('angularJustgageApp')
    .directive('justGage', function () {
        return {
            template: '<div style="width:100%; margin:0px auto 0px auto"></div>',
            restrict: 'E',
            scope: {
                value: '=value'
            },
            controller: 'JustGageCtrl',
            link: function postLink(scope, element, attrs, justGageCtrl) {
                justGageCtrl.addGage(scope, element, attrs);
            }
        };
    });
