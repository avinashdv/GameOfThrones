
// Controller Used in Main View
app.controller('firstController', [ '$filter', 'fact', function ($filter,fact) {

	var main = this;


	this.data = [];
	this.outData = [];

	this.loadData = function(){
		// Getting the data from books method of factory
		fact.getBooks()
		.then(function success(response){
			// console.log(response.data);
			main.books = response.data;

			console.log("Books Data");
			console.log(main.books);

			// Getting the data from characters method of factory
			fact.getCharacters()
			.then(function success(response){
				// console.log(response.data);
				main.characters = response.data;
				
				// console.log(main.books);

				console.log("Characters Data");
				console.log(main.characters);

				// Getting the data from houses method of factory
				fact.getHouses()
				.then(function success(response) {
					// console.log(response.data);
					main.houses = response.data;

					// console.log(main.books);
					// console.log(main.characters);

					console.log("Houses Data");
					console.log(main.houses);

					main.outData = main.books.concat(main.characters).concat(main.houses);
					console.log("Books, Characters, Houses Data");
					console.log(main.outData);

					// Getting the data and filter out that don't have name
					for(var i = 0; i < main.outData.length; i++){
						if(main.outData[i].name !== ""){
							
							main.data.push(main.outData[i]);
						}	
					}
					console.log(main.data);
					main.data = $filter('orderBy')(main.data, 'name');

					// select for alphabetical and its reverse
					main.order = function (order) {
        			if (order === 0) {
            				main.data = $filter('orderBy')(main.data, 'name');
        			} else {
            				main.data = $filter('orderBy')(main.data, 'name', true);
        				}
    				}

    				// Logic to work for One of the below
    				main.filterBooks = function(){
    					return function(item){
    						if(item.isbn){
    							return true;
    						}
    						return false;
    					}
    				}
    				
    				main.filterCharacters = function(){
    					return function(item){
    						if(item.gender){
    							return true;
    						}
    						return false;
    					}
    				}

    				main.filterHouses = function(){
    					return function(item){
    						if(item.region){
    							return true;
    						}
    						return false;
    					}
    				}
					console.log(main.outData);
					console.log(main.data);
				}, function failure(response) {
					console.log(response);
				})
			}, function failure(response){

			})
		}, function failure(response){
			console.log(response);
		});
	}

}]);