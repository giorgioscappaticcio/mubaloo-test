'use strict';

/**
 * @ngdoc function
 * @name mubalootestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mubalootestApp
 */
angular.module('mubalootestApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
    
    $scope.lat = localStorage.lat
    $scope.lng = localStorage.lng

    $scope.times = moment().format('MMMM Do YYYY, h:mm:ss a');

    $scope.formdata = {
    	title : '',
    	firstname: '',
    	lastname: '',
    	dataofbirthday: '',
    	lat: '',
    	lng: '',
    	feedback: ''  
    }

    
   //  if (navigator.geolocation) {
	  //   navigator.geolocation.getCurrentPosition(function(position){
	  //     $scope.$apply(function(){
	  //       $scope.position = position;
	  //     });
	  //   });
	  // }



  });
