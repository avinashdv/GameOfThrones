app.directive('gotBooks', function() {
	return {
		restrict: "E",
		templateUrl: "./pages/book-card.html",
		controller: function($scope){
			if($scope.data.isbn){
				$scope.bookValue = true;
				$scope.bookData = $scope.data;
			} 
			 else {
				console.log("None");
			}

		}
		
	}
});


app.directive("gotCharacters", function() {
	return {
		restrict: "E",
		templateUrl:"./pages/character-card.html",
		controller: function($scope){
			if($scope.data.gender){
				$scope.characterValue = true;
				$scope.characterData = $scope.data;
			} else{
				console.log("None");
			}
		}
	}
});

app.directive("gotHouses", function() {
	return {
		restrict: "E",
		templateUrl:"./pages/house-card.html",
		controller: function($scope){
			if($scope.data.region){
				$scope.houseValue = true;
				$scope.houseData = $scope.data;
			}
			console.log("None")
		}
	}
});