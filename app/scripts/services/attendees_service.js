'use strict';

//Attendees service used to communicate Attendees REST endpoints
angular.module('codeRedFrontEndApp').factory('Attendees', ['$resource','CodeREDServerURL',
    function($resource, CodeREDServerURL) {

        var cbMethods = {
            success: function(value) {
                console.log('Success:',value);
            },
            error: function(value) {
                console.log('Error:',value);
            }
        };

        var resourceObj = $resource(CodeREDServerURL,
            { attendeeId: '@_id'},
            {update: { method: 'POST'}
        });

        resourceObj.prototype.update = function(cb) { // jshint ignore:line
            return resourceObj.update({id: this._id.$oid})
            .$promise.then(cbMethods.success, cbMethods.error);
        };

        resourceObj.prototype.destroy = function(cb) { // jshint ignore:line
            return resourceObj.remove({id: this._id.$oid})
            .$promise.then(cbMethods.success, cbMethods.error);
        };

        return resourceObj;
    }
//
]);
