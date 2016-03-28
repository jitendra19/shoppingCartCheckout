'use strict';

var checkoutModule = angular.module('checkoutModule', [function(){
	console.log("Hi Foo;");
}]);


checkoutModule.controller('mainController', function($scope, checkOutService) {
    $scope.name = 'jiten';

    $scope.changeName = function() {
        $scope.name = 'jitendra singhal';
    };

    function init(){
    	alert('Hi');
    	checkOutService.getJsonObject()
    		.then(function(response){
    			$scope.data = response;
    			alert(response);
    		});
    }

    init();
});

checkoutModule.service('checkOutService', function($http, $q) {
	var self = this;

	self.getJsonObject = function() {
		var url='https://api.myjson.com/bins/19ynm&callback=callbackFN';
		var deferred = $q.defer();
         $http.get(url)
         	.then(function(response) {
      			self.serviceModel = response; 
      			deferred.resolve(response);
   			});
   		return deferred.promise;
   };
});