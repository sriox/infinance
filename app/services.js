(function(){
	'use strict';

	var infinanceServices = angular.module('infinanceServices', []);

	infinanceServices.factory('Products', ['$resource', function($resource){
		return $resource('http://ec2-52-23-194-180.compute-1.amazonaws.com/rates');
		//return $resource('data/credits.js');
	}])
}());