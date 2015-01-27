'use strict';

/**
 * @ngdoc overview
 * @name mubalootestApp
 * @description
 * # mubalootestApp
 *
 * Main module of the application.
 */
angular
  .module('mubalootestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularReverseGeocode'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // .when('/step1', {
      //   templateUrl: 'views/step1.html',
      //   controller: 'AboutCtrl'
      // })
      // .when('/step2', {
      //   templateUrl: 'views/step2.html',
      //   controller: 'AboutCtrl'
      // })
      // .when('/step3', {
      //   templateUrl: 'views/step3.html',
      //   controller: 'AboutCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
