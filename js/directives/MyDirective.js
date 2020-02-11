	test.directive('headerTitle',function () {
		return{
			restirct:'A',
			templateUrl:'header.html'
		}; 
	});

	test.directive('partTitle',function () {
		return{
			restirct:'A',
			templateUrl:'part.html',
			controller: function ($scope,factoryOrang) {
			/*	$scope.data=
						[{id:4, nama:'Rizky', kota:'Cimahi'},
						 {id:2, nama:'Ricky', kota:'Jakarta'},
						 {id:1, nama:'Ahmad Reza', kota:'Belitung'},
						 {id:3, nama:'Rian', kota:'Bandung'}]; 
			*/
			factoryOrang.getOrang().then(function(hasil){
				$scope.data=hasil.data;
			});
			}
		}; 
	});