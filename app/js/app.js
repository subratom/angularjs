'use strict';

var weeklyroundupApp = angular.module('weeklyroundupApp',[
	'ngRoute',
	'weeklyroundupControllers'
	]);

weeklyroundupApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/items',{
		templateUrl: 'partials/weeklyroundup-items.html',
		controller: 'weeklyroundupItemsCtrl'	
	}).
	when('/item:Id',{
		templateUrl: 'partials/weeklyroundup-item.html',
		controller: 'weeklyroundupItemCtrl'	
	}).
	otherwise({
		redirectTo: '/items'
	});
}]);

