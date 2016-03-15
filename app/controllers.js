(function(){
	'use strict';

	var controllers = angular.module('infinanceControllers', ['infinanceServices']);

	controllers.controller('HomeController', ['$scope', function($scope){
		$scope.title = 'Home';

	}]);
	controllers.controller('CompareController', ['$scope', 'Products', function($scope, Products){
		$scope.title = 'Compare';
		$scope.creditValue = 0;
		$scope.salary = 0;
		$scope.term = 0;
		$scope.employee = false;

		$scope.products = Products.get();
		$scope.validProducts = [];
		$scope.errorsCount = 0;
		$scope.errors = {};
		$scope.errors.creditValue = {};
		$scope.errors.term = {};

		$scope.validate = function(){

			if(!$scope.creditValue){
				$scope.errors.creditValue.status = true;
				$scope.errors.creditValue.message = 'Debe diligenciar el valor del monto';
				$scope.errorsCount++;
			}

			if(!$scope.term){
				$scope.errors.term.status = true;
				$scope.errors.term.message = 'Debe diligenciar el plazo';
				$scope.errorsCount++;
			}
		}

		$scope.compareCredits = function(){
			$scope.errorsCount = 0;
			$scope.validate();

			if($scope.errorsCount === 0){
				var products = $scope.products.list;
				$scope.validProducts = [];

				angular.forEach(products, function(product){
					var validRate = filterTerm(product.rates, $scope.term);
					if(!!validRate && validateSalary(product, $scope.salary)){
						product.selectedRate = validRate;
						product.monthlyPayment = getMonthlyPayment($scope.creditValue, $scope.term, validRate);
						product.totalPayment = getTotalPayment(product.monthlyPayment, $scope.term);
						product.monthlyRate = getMonthlyRate(validRate.value);
						product.totalRatePayment = product.totalPayment - parseFloat($scope.creditValue);

						$scope.validProducts.push(product);
					}
				});
			}
		}
	}]);

	//Validate if a term apply in a product
	var filterTerm = function(rates, term){
		var validRate = undefined;
		var intTerm = parseInt(term, 10);
		angular.forEach(rates, function(rate){
			if(rate.minMonths <= intTerm && rate.maxMonths >= intTerm){
				validRate = rate;
			}
		});
		return validRate;
	}

	var getMonthlyPayment = function(value, term, rate){
		var xValue = parseFloat(value);
		var xTerm = parseInt(term);
		var xRate = parseFloat(rate.value);

		var mRate = getMonthlyRate(xRate);
		var mRateFactor = mRate / 100;
		var payment = xValue * ((Math.pow((1 + mRateFactor), xTerm) * mRateFactor) / (Math.pow(1 + mRateFactor, xTerm) - 1));

		return payment;
	}

	var getMonthlyRate = function(anualRate){
		return ((Math.pow((1 + parseFloat(anualRate) / 100), (30/360)))-1) * 100;
	}

	var getTotalPayment = function(monthlyPayment, term){
		return parseFloat(monthlyPayment) * parseInt(term);
	}

	var validateSalary = function(product, salary){
		var xSalary = parseInt(salary);
		if(xSalary === 0) return true;

		var minSalary = parseFloat(product.restrictions.minSalary);
		return minSalary <= xSalary;
	}


}());