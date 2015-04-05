'use strict';

/**
 * @ngdoc function
 * @name testtaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testtaskApp
 */
angular.module('testtaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
