'use strict';

/**
 * @ngdoc overview
 * @name codeRedFrontEndApp
 * @description
 * # codeRedFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('codeRedFrontEndApp', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider',
  function($stateProvider) {

    /**
     * TODO
     * delete when app does more than attendee signup
     */

    // Attendees state routing
    $stateProvider.
    // state('listAttendees', {
    //  url: '/attendees',
    //  templateUrl: 'modules/attendees/views/list-attendees.client.view.html'
    // }).
    state('createAttendee', {
      url: '/attendees/create',
      templateUrl: 'views/attendees/create-attendee.html'
    }).
    // state('viewAttendee', {
    //  url: '/attendees/:attendeeId',
    //  templateUrl: 'modules/attendees/views/attendees/view-attendee.client.view.html'
    // }).
    state('thankYou', {
      url: '/attendees/:attendeeId/thankYou',
      templateUrl: 'views/attendees/thankyou-attendee.html'
    });
  }
]).config(function($urlRouterProvider){
    // if the path doesn't match any of the urls you configured
    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/attendees/create');

})
.factory('CodeREDServerURL', function(){
  var serverURL = 'http://fbexpresstest.azurewebsites.net/';
  return serverURL + '/attendees/:attendeeId';
});


