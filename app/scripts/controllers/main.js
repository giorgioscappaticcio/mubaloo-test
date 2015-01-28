'use strict';

/**
 * @ngdoc function
 * @name mubalootestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mubalootestApp
 */
angular.module('mubalootestApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    

   
   	$scope.showAfterStart = false;
    $scope.showToStart = false;
    $scope.showLoader = true;

    $scope.refreshposition = function(){
  		$scope.times = moment().format('MMMM Do YYYY, h:mm:ss a');
      if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position){
	      $scope.$apply(function(){
	        $scope.lat = position.coords.latitude;
	        $scope.lng = position.coords.longitude;
	        $scope.formdata.lat = $scope.lat;
	        $scope.formdata.lng = $scope.lng;
	        if (!$scope.showAfterStart){
	        	$scope.showToStart = true;
            $scope.showLoader = false;
	        }
	      });
	    });
	  }
  	}

  	$scope.refreshposition();



    

    $scope.formdata = {
    	title: {value: 'Mr'},
    	firstname: '',
    	lastname: '',
    	dateofbirthday: '',
    	lat: $scope.lat,
    	lng: $scope.lng,
    	currenttime: $scope.times,
    	feedback: ''  
    }

	  $scope.templates =
    	[ { name: 'Yuor<br> Details', url: '../../views/step1.html'},
      		{ name: 'When and Where', url: '../../views/step2.html'},
      		{ name: 'Send us a feedback', url: '../../views/step3.html'} ];
  	
  	

  	$scope.startform = function(){
      $scope.showToStart=false
      $scope.showAfterStart=true;
      $scope.template = $scope.templates[0];
    }

    $scope.goto = function (step){
      if (step == 1 || step == 2) {
        if ($scope.formdata.firstname == '') {
          $scope.firstnameReq = true;
          return;
        } else {
          $scope.firstnameReq = false;
        }

        if ($scope.formdata.lastname == '') {
          $scope.lastnameReq = true;
          return;
        } else {
          $scope.lastnameReq = false;
        }
        if ($scope.formdata.dateofbirthday == '') {
          $scope.bdayReq = true;
          return;
        }  else {
          $scope.bdayReq = false;
          $scope.$parent.step1active = true;
        }
      } 

  		$scope.template = $scope.templates[step];
  	}



  	$scope.collectData = function(){
  		console.log($scope.formdata)
  	}



  });
