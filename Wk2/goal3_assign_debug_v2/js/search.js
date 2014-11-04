/**Jana Nash Siegle
 Nov 4, 2014
 PWA-1 1411-01
 O'Loughlin**/

// Create encapsulated privatized scope using a self-executing function
(function(){																	//self-executing opening function...
	console.log("are we starting?");																			//with a specific scope
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)				//var to get results of search
	var resultsDIV = document.getElementById("results"),						//var to retrieve input from searchform
		searchInput = document.forms[0].search,
		currentSearch = ''														//var for current search
	;																			//end of setting three vars
	
	// Validates search query
	var validqte = function(query){					//fixed err == to = )& this creates a var function 4 query
		console.log("this is at the beginning of the search validation query");	//putting in place section checks																				//after user inputs term(s)
															// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){						//fixed err of = to === empty space before user input/term?
			query = query.substring(1, query.length);					//Not anymore!
		};																//end first while
		while(query.charAt(query.length-1) === "") {						//empty space after term?
			query = query.substring(0, query.length - 1);					//Mr. clean to the rescue!!
		};																//end 2nd while
		
		// Check search length, must have 3 characters
		if(query.length < 3){											//term entered has 3 characters?
			alert("Your search query is too small, try again.");   //(fixed err no ending quotes in alert); & try again
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();									//when searchInput has the focus...
			return;													//return the input to var above
		};															//end if statement
		
		search(query);												//initializes the search query FN
	};																//end
	
	// Finds search matches //error somewhere in here preventing code from running
	var search = function(query){	//fixed error of no opening FN bracket		//creating var FN for search query
		console.log("this is at the beginning of the search matches query");  //putting in place section checks
		// split the user's search query string into an array
		var queryArray = query.join(" ");						//taking users input and making keywords into an array
		
		// array to store matched results from database.js
		var results = [];											//store array to match up against db

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {						//let's look for matches!!

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');					//divide each title up by a pipe! happy keywords!!
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);  //save title into lowercase

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {		//let's nose through the search string input by user
				var qitem = queryArray[ii].tolowercase();			//and we'll save each one into a lowercase variable

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);		//what kind of bait do keywords nibble on?  time to fish!
				if (compare !== -1) {									//for keywords in the title
					results.push(db[i]);			//hey we found a match!  Your prize is a title in the results array!
				};										//end if
			};											//fixed err + closing bracket
		};												//fixed err + closing bracket
		
		results.sort();									//let's sort our results
		console.log(results);			//results check for de-bugging
		// Check that matches were found, and run output functions
		if(results.length = 0){							//let's check our matches array
			noMatch();									//if none, awwww.. I wanted to play, I'm bored.
		}else{											//but if there are matches??????
			showMatches(results);						//yay!!  let's show matches
		};												//more unnecessary colons...semi-colons but let's not be lazy
	};													//more semi's down the pike!!!  should save on gas and stay home
														//but better safe than sorry!
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){					//psst..if there's no match this is what we're gonna do..listen close
		var html = ''+							//writing html with javascript?  wow, amazing huh?!!!
			'<p>No Results found.</p>'+		//nice tidy little paragraph there, too bad no results to show, no matches
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'  //looking class css!
		;
		resultsDIV.innerHTML = html;			//Lights! Camera!  Action!  | stand right there :) (page placement)
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){	//psst, but listen, if we do have matches?  THIS is what we are going to do
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',      //more of that amazing javascript writing html...is someone confused?
			title,							//nawwwww jack of all trades I am!!  my name is...
			url								//here's my address
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){				//loop for results search, two vars i and j
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');				//let's get our info using the indexes, I'm tired
			title = results[i].subString(0, titleEnd);		//pull the title out of the string.
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  //go here..find video
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';				//jeez, will it never end, now linking?
		};																		//some things are just necessary
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.					//more placement
	};																			//end results FN
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {									//submit FN
		var query = searchInput.value;											//what value is in the input field
		validqte(query);														//is everything correct?

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;															//cancels default behavior, stops
	};						//fixed err added closing bracket to semi colon				//link from being followed

})();