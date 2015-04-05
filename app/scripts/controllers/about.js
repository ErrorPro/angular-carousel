'use strict';

/**
 * @ngdoc function
 * @name testtaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testtaskApp
 */
angular.module('testtaskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
