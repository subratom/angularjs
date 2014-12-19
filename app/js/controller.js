'use strict';

//Controllers

var weeklyroundupControllers = angular.module('weeklyroundupControllers',[]);


weeklyroundupControllers.controller('weeklyroundupItemsCtrl',['$scope','$http',
	function($scope,$http){
	$http.get('weeklyroundupdata/roundupdata.json').success(function(data){
		$scope.roundupdata = data;
		//console.log(data);	
	});

	$scope.orderProp = 'StartDate';
}]);


weeklyroundupControllers.controller('weeklyroundupItemCtrl',['$scope','$routeParams',
	function($scope,$routeParams){
		//$http.get('taxonomies/taxonomies.json').success(function(data){
		$scope.Id = $routeParams.Id;	
	//})
}]);

	
