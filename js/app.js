var test=angular.module('testApp',['ngRoute']);

test.factory('factoryOrang', function ($http) {
	var factoryOrang = {};
	factoryOrang.getOrang = function () {
		return $http.get('data.php');
	}; 
	factoryOrang.putOrang = function (datas) {
		return $http.post('add.php', datas);
	}; 
	return factoryOrang;
});



test.config(function($routeProvider) {
	$routeProvider
	.when('/tambahinfo',{
		templateUrl:'index2.html',
		controller:'add'
	})
	.when('/kontak',{
		templateUrl:'kontak.html'
	})
	.otherwise({redirectTo: '/'});
});