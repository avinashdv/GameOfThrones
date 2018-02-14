
 	// Controller used in Self View
	app.controller("selfController", ['$routeParams', 'fact', function ($routeParams,fact){
	
	var main = this;
	
	this.bookName = $routeParams.bookName;
	console.log(this.bookName);

	this.characterName = $routeParams.characterName;
	console.log(this.characterName);

	this.houseName = $routeParams.houseName;
	console.log(this.houseName);

	this.bookData = [];
	this.characterData = [];
	this.houseData = [];

	this.Book = '';
	this.Character = '';
	this.House = '';

	if(this.bookName === undefined){
		this.Book = false;
	}
	else{
		this.Book = true;
	}

	if(this.characterName === undefined){
		main.Character = false;
	}
	else{
		main.Character = true;
	}

	if(this.houseName === undefined){
		main.House = false;
	}
	else{
		main.House = true;
	}

	// Related to Book
	this.pov = '';
	this.char = '';

	// Related to Character
	this.titles 		= '';
	this.aliases 		= '';
	this.allegiances 	= '';
	this.books 			= '';
	this.povBooks 		= '';
	this.tvSeries 		= '';
	this.playedBy 		= '';
	this.culture 		= '';
	this.born			= '';
	this.died 			= '';
	this.father 		= '';
	this.mother			= '';
	this.spouse			= '';

	// Related to House
	this.houTitles				= '';
	this.houSeats 				= '';
	this.houAncestralWeapons 	= '';
	this.houCadetBranches  		= '';
	this.houSwornMembers 		= '';
	this.houRegion 				= '';
	this.houCoatOfArms 			= '';
	this.houWords 				= '';
	this.houCurrentLord 		= '';
	this.houHeir 				= '';
	this.houOverLord 			= '';
	this.houFounded 			= '';
	this.houFounder 			= '';
	this.houDiedOut 			= '';

	this.loadBookData = function(){
		fact.getBooks()
		.then(function success(response){
			console.log(response);
			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].name ===  main.bookName){
					main.bookData = response.data[i];
					if(main.bookData.characters.length !== 0){
						main.char = true;
					} else{
						main.char = false;
					}

					if(main.bookData.povCharacters.length !== 0){
						main.pov = true;
					} else{
						main.pov = false;
					}
					return main.bookData;
				} else{
					console.log("Name None Not Displayed");
				}
				
			}
		}, function failure(response){
			console.log(response);
		});
	};

	this.loadCharacterData = function(){
		fact.getCharacters()
		.then(function success(response){
			console.log(response);
			// main.characterData = response.data[main.characterId];
			// console.log(main.characterData);

			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].name === main.characterName){
					main.characterData = response.data[i];

					if(main.characterData.titles.length > 0 && main.characterData.titles[0] !== ""){
						main.titles = true;
					} else{
						main.titles = false;
					}

					if(main.characterData.aliases.length > 0 && main.characterData.aliases[0] !== ""){
						main.aliases = true;
					} else{
						main.aliases = false;
					}

					if(main.characterData.allegiances.length > 0 && main.characterData.allegiances[0] !== ""){
						main.allegiances = true;
					} else{
						main.allegiances = false;
					}

					if(main.characterData.books.length !== 0){
						main.books = true;
					} else{
						main.books = false;
					}

					if(main.characterData.povBooks.length !== 0){
						main.povBooks = true;
					} else{
						main.povBooks = false;
					}

					if(main.characterData.tvSeries.length > 0 && main.characterData.tvSeries[0] !== ""){
						main.tvSeries = true;
					} else{
						main.tvSeries = false;
					}

					if(main.characterData.playedBy.length > 0 && main.characterData.playedBy[0] !== ""){
						main.playedBy = true;
					} else{
						main.playedBy = false;
					}

					if(main.characterData.culture !== ""){
						main.culture = true;
					} else{
						main.culture = false;
					}

					if(main.characterData.born !== ""){
						main.born = true;
					} else{
						main.born = false;
					}

					if(main.characterData.died !== ""){
						main.died = true;
					} else{
						main.died = false;
					}

					if(main.characterData.father !== ""){
						main.father = true;
					} else{
						main.father = false;
					}

					if(main.characterData.mother !== ""){
						main.mother = true;
					} else{
						main.mother = false;
					}

					if(main.characterData.spouse !== ""){
						main.spouse = true;
					} else{
						main.spouse = false;
					}

					console.log(main.characterData.povBooks.length);
					return main.characterData;
				}
				else{
					console.log("Name None Not Displayed");
				}
			}

			

		}, function failure(response){
			console.log(response);
		});
	};

	this.loadHouseData = function() {
		fact.getHouses()
		.then(function success(response){
			console.log(response);

			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].name === main.houseName){
					main.houseData = response.data[i];

					if(main.houseData.titles.length > 0 && main.houseData.titles[0] !== ""){
						main.houTitles = true;
					} else{
						main.houTitles = false;
					}

					if(main.houseData.seats.length > 0 && main.houseData.seats[0] !== ""){
						main.houSeats = true;
					} else{
						main.houSeats = false;
					}

					if(main.houseData.ancestralWeapons > 0 && main.houseData.ancestralWeapons[0] !== ""){
						main.houAncestralWeapons = true;
					} else{
						main.houAncestralWeapons = false;
					}

					if(main.houseData.cadetBranches.length !== 0){
						main.houCadetBranches = true;
					} else{
						main.houCadetBranches = false;
					}

					if(main.houseData.swornMembers.length !== 0){
						main.houSwornMembers = true;
					} else{
						main.houSwornMembers = false;
					}

					if(main.houseData.region !== ""){
						main.houRegion = true;
					} else{
						main.houRegion = false;
					}

					if(main.houseData.coatOfArms !== ""){
						main.houCoatOfArms = true;
					} else{
						main.houCoatOfArms = false;
					}

					if(main.houseData.words !== ""){
						main.houWords = true;
					} else{
						main.houWords = false;
					}

					if(main.houseData.currentLord !== ""){
						main.houCurrentLord = true;
					} else{
						main.houCurrentLord = false;
					}

					if(main.houseData.heir !== ""){
						main.houHeir = true;
					} else{
						main.houHeir = false;
					}

					if(main.houseData.overlord !== ""){
						main.houOverLord = true;
					} else{
						main.houOverLord = false;
					}

					if(main.houseData.founded !== ""){
						main.houFounded = true;
					} else{
						main.houFounded = false;
					}

					if(main.houseData.founder !== ""){
						main.houFounder = true;
					} else{
						main.houFounder = false;
					}

					if(main.houseData.diedOut !== ""){
						main.houDiedOut = true;
					} else{
						main.houDiedOut = false;
					}

					return main.houseData;
				}
			}
			// main.houseData = response.data[main.houseId];
			// console.log(main.houseData);
		}, function failure(response){
			console.log(response);
		});
	};
}]);