'use strict';

/**
 * @ngdoc function
 * @name codeRedFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeRedFrontEndApp
 */
angular.module('codeRedFrontEndApp')
  .controller('MainCtrl', ['$scope', '$location',
  function($scope, $location) {

    /**
     * TODO
     * delete when app does more than attendee signup
     */
    $location.path('createAttendee');
  }
]);
