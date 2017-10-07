// 		// choosing a word at random
// 		var words = ["pizza", "potato", "science", "sweater"];

// 		var randomWord = words[Math.floor(Math.random()*words.length)];;

// 		var word = randomWord;



//VARIABLES
var words = ["spike", "jet", "ein", "missvalentine", "spacecowboy"];
var selectedWord = "";
var lettersinWord = [];
var blanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var strikes = 0;

//FUNCTIONS

function startGame () {
	selectedWord = words[Math.floor(Math.random()*words.length)];
	lettersinWord = selectedWord.split("");
	blanks = lettersinWord.length;

	strikes = 0; //reset
	wrongGuesses = [];
	blanksAndSuccesses =[];

	for (var i = 0; i < blanks; i++){
		blanksAndSuccesses.push("_");
	}

	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("strikes").innerHTML = strikes;
	document.getElementById("winCounter").innerHTML = winCounter;
	document.getElementById("lossCounter").innerHTML = lossCounter;

	console.log(selectedWord); //testing
	console.log(lettersinWord);
	console.log(blanks);
	console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
	var isPresent = false;

	// is user input in word
	for (var i=0; i < blanks; i++) {
		if (selectedWord[i] == letter) {
			isPresent = true;
			//alert("found"); testing
		}
	}

	// user guessed correctly
	if (isPresent) {
		for (var i=0; i < blanks; i++) {
			if (selectedWord[i] == letter) {	
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else {
		wrongGuesses.push(letter);
		strikes++;
	}

	console.log(blanksAndSuccesses);

}

function checkProgress () {
	console.log("Win count: " + winCounter + " || Loss count: " + lossCounter + " || Strikes: " + strikes);

	//update HTML with user input
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
	document.getElementById("strikes").innerHTML = strikes;



	//user win?
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You won! See you Space Cowboy!");

		//give win in HTML
		document.getElementById("winCounter").innerHTML = winCounter;
		startGame(); //new game
	}

	//user lose?
	else if (strikes == 9) {
		lossCounter++;
		alert("Sorry bub. Ya lost.")

		//give loss in HTML
		document.getElementById("lossCounter").innerHTML = lossCounter;
		startGame(); //new game
	}

}	


//GAME

startGame();


document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	checkProgress();


	console.log("user input: " + letterGuessed); //testing
}





