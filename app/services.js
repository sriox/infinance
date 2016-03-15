(function(){
	'use strict';

	var infinanceServices = angular.module('infinanceServices', []);

	infinanceServices.factory('Products', ['$resource', function($resource){
		return $resource('data/credits.js');
	}])
}());