'use strict';

/**
 * @ngdoc function
 * @name angularJustgageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJustgageApp
 */
angular.module('angularJustgageApp')
  .controller('MainCtrl', function ($scope, $interval) {
       $scope.randomInt = 0;
        $interval(function(){
           $scope.randomInt = Math.floor(Math.random()*90);
       }, 2000);
  });
