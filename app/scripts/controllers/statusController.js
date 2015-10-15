'use strict';

angular.module('codeRedFrontEndApp').controller('statusController', ['$scope','$http','ENV','$location', function($scope,$http,ENV,$location){

  $scope.init = function() {
    $scope.showLinkToAcceptance = false;
    $scope.statusResponse = false;
  };

  $scope.attendee = {
    email: ''
  };
  console.log(ENV.apiEndpoint);
  $scope.checkStatus = function() {
    $scope.statusBtnTitle = 'Checking...';
    $http({
      method: 'GET',
      url: ENV.apiEndpoint+'attendees/email/'+$scope.attendee.email
    }).then(function successCallback(_attendee) {
        $scope.statusResponse = true;

        _attendee = _attendee.data;
        // Attendee is apparently Signed up,
        // So they must be registered
        _attendee.isRegistered = true;


        var setStatusOfAttendee = (function() {  // jshint ignore:line

          if (!_attendee.acceptedEmailSent) {
            _attendee.isAccepted = false;
            $scope.statusResponse = 'You are currently on the waiting list to be accepted.';
            return ;
          }

          // attendee.acceptedEmailSent == true
          _attendee.isAccepted = true;

          if (!_attendee.isComing) {

            // attendee.isComing == false
            _attendee.hasReservedSpot = false;
            $scope.statusResponse = 'You have been accepted, but have yet to reserve your spot. Click the following button to reserve your spot.';
            $scope.showLinkToAcceptance = true;
            return ;

          } else {

             // attendee.hasReservedSpot == true
            _attendee.hasReservedSpot = true;
            $scope.statusResponse = 'You have been accepted and your spot has been reserved! See you at CodeRED!';
            return ;
          }

        })();

        // set this temporary attendee to the controller attendee.
        $scope.attendee = _attendee;

        $scope.statusBtnTitle = 'Check Status';

      }, function errorCallback(errorResponse) {
        $scope.statusResponse = true;
        // They don't exist in the database or something went wrong.
        $scope.attendee.isRegistered = false;
        $scope.attendee.isAccepted = false;
        $scope.attendee.hasReservedSpot = false;
        $scope.statusBtnTitle = 'Check Status';
        $scope.statusResponse = errorResponse.data.message;
      });
  };

  $scope.reserveSpot = function(attendee) {
    console.log(attendee);
    $location.path('attendees/' + attendee._id+'/accepted');
  };

}]);
