test.controller('add',function ($scope, $http, factoryOrang) {
		$scope.tambahData = function () {
			databaru = {
				nama: $scope.databaru.nama,
				kota: $scope.databaru.kota
			};

			factoryOrang.putOrang(databaru).then(function(hasil){
				$scope.data.push({
					nama: $scope.databaru.nama,
					kota: $scope.databaru.kota
				});

				$scope.databaru.nama = '';
				$scope.databaru.kota = '';

				alert(hasil);
			});
		};		 
	});