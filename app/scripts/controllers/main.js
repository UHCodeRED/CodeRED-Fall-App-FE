'use strict';

/**
 * @ngdoc function
 * @name codeRedFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeRedFrontEndApp
 */
angular.module('codeRedFrontEndApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
