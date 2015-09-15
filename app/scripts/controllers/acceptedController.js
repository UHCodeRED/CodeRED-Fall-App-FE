'use strict';

angular.module('codeRedFrontEndApp').controller('AcceptedCtrl', ['$scope', '$stateParams', '$location', 'Attendees',
    function ($scope, $stateParams, $location, Attendees) {

    // Update existing Attendee
    $scope.update = function() {
        $scope.attendee.shirtSize = $scope.attendee.shirtSize.trim();
        var attendee = $scope.attendee;
        console.log(attendee);

        attendee.$update(function(response) {
            if (response.isComing === true) {
                $location.path('attendees/' + response._id+'/seeYouThere');
            } else {
                $scope.error = 'Hmmmmm looks like you\'re not going.';
            }
        }, function(errorResponse) {
         $scope.error = errorResponse.data.message;
        });
    };

    // Find existing Attendee
    $scope.findOne = function() {
        console.log(Attendees.get({
            attendeeId: $stateParams.attendeeId
        }));
        Attendees.get({
            attendeeId: $stateParams.attendeeId
        }).$promise.then(function(person) {
            if (person.isComing === true) {
                return $location.path('createAttendee');
            }
            // person.isComing = true;
            $scope.attendee = person;
        }, function(err) {
            console.log('CTRL Error:',err);
            if (err.status !== 200) {
                return $location.path('createAttendee');
            }
        });
    };
}]);
