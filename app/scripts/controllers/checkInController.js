'use strict';

angular.module('codeRedFrontEndApp').controller('checkInController',
  ['$scope','$http','ENV','$location','$state','$stateParams','Attendees','$timeout',
  function($scope,$http,ENV,$location,$state,$stateParams,Attendees,$timeout){

  $scope.init = function() {
    $scope.showCheckInButton = false;
    $scope.errorMessage = '';
    $scope.successMessage = '';
    $scope.attendee = {
      email: ''
    };
  };

  console.log(ENV.apiEndpoint);

  console.log($stateParams.organizerToken);

  /* ==========================================================================
     CHECK IN
     ========================================================================== */

  $scope.checkIn = function(attendee) {

    console.log(attendee);


    Attendees.get({
        attendeeId: attendee._id
    }).$promise.then(function(attendee) {

        attendee.checkedIn = true;
        attendee.checkedInBy = $stateParams.organizerToken;
        attendee.$update(function(response) {
            console.log('SUCCESS!!!');
            console.log(response);
            $scope.successMessage = attendee.firstName+' '+attendee.lastName+' is successfully checked in! :)';
            // refresh page after 1 section
            $timeout(function(){
              console.log('delay!!!');
              $scope.init();
            }, 1000);

        }, function(errorResponse) {
         $scope.errorMessage = errorResponse.data.message;
        });


    }, function(err) {
        console.log('CTRL Error:',err);
        $scope.errorMessage = err.data.message;
    });




  };


  /* ==========================================================================
     FIND ATTENDEE
     ========================================================================== */

  $scope.findAttendee = function() {
    $scope.statusBtnTitle = 'Finding...';
    $http({
      method: 'GET',
      url: ENV.apiEndpoint+'attendees/email/'+$scope.attendee.email
    }).then(function successCallback(_attendee) {
        $scope.showCheckInButton = true;

        _attendee = _attendee.data;

        // set this temporary attendee to the controller attendee.
        $scope.attendee = _attendee;

        $scope.statusBtnTitle = 'Find Attendee';

      }, function errorCallback(errorResponse) {
        $scope.showCheckInButton = true;
        // They don't exist in the database or something went wrong.
        $scope.attendee.isRegistered = false;
        $scope.attendee.isAccepted = false;
        $scope.attendee.hasReservedSpot = false;
        $scope.statusBtnTitle = 'Find Attendee';
        $scope.errorMessage = errorResponse.data.message;
      });
  };



  /* ==========================================================================
     REGISTER ATTENDEE
     ========================================================================== */

  $scope.registerNewUser = function() {
    $state.go('createAttendee');
  };
}]);
