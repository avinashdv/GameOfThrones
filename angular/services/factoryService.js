//  using Factory method
app.factory('fact', function($http){
	var fact = {};

	var mainUrl = "https://www.anapioficeandfire.com/api";
	

	fact.getBooks = function(){

		return $http({
			method: 'GET',
			url: mainUrl+'/books/'+'?page=1&pageSize=12'
		})

	} // end books 

	fact.getCharacters = function(){

		return $http({
			method: 'GET',
			url: mainUrl+'/characters/'+ '?page=1&pageSize=22'
		})

	} // end characters

	fact.getHouses = function(){

		return $http({
			method: 'GET',
			url: mainUrl+'/houses/'+ '?page=1&pageSize=12'
		})

	} // end houses

	return fact;
});