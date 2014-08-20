'use strict';

/**
 * @ngdoc function
 * @name angularJustgageApp.controller:JustgageCtrl
 * @description
 * # JustgageCtrl
 * Controller of the angularJustgageApp
 */
angular.module('angularJustgageApp')
    .controller('JustGageCtrl', function ($scope) {
        var self = this;
        self.addGage = function(gage, element, attrs){
            var justGage = new JustGage({
                parentNode: angular.element(element.children()[0])[0],
                width: 150,
                height: 150,
                title: 'test',
                label: 'test',
                value: 0,
                min: 0,
                max: 100,
                decimals: 0,
                counter: true
            });
            gage.$watch('value', function (value) {
                if (!isNaN(value)){
                    justGage.refresh(value);
                }
            });
        };
    });
