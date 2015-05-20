'use strict';

//Attendees service used to communicate Attendees REST endpoints
angular.module('codeRedFrontEndApp').factory('Attendees', ['$resource', function($resource) {

    return $resource('http://fbexpresstest.azurewebsites.net/attendees/:attendeeId', { attendeeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
