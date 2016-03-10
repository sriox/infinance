(function(){
	'use strict';

	var controllers = angular.module('infinanceControllers', []);

	controllers.controller('HomeController', ['$scope', function($scope){
		$scope.title = 'Home';

	}]);
	controllers.controller('CompareController', ['$scope', function($scope){
		$scope.title = 'Compare';
		$scope.creditValue = 0;
		$scope.salary = 0;
		$scope.term = 0;
		$scope.employee = true;

		$scope.compareCredits = function(){
			alert('Hello World');
		}
	}]);
}());