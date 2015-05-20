'use strict';

//Attendees service used to communicate Attendees REST endpoints
angular.module('codeRedFrontEndApp').factory('Attendees', ['$resource','CodeREDServerURL',
  function($resource, CodeREDServerURL) {

    return $resource(CodeREDServerURL, { attendeeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
