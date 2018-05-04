//variables



// current word must be set before running this function

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
var initUserGuess = function () {
    // console.log("asd")
    userGuess = "";
    for (var i = 0; i < currentWord.length; i++) {
        userGuess += "_";
    }
}

var updateHTML = function () {
    // console.log(userGuess)
    winsSpan.textContent = wins;
    remainSpan.textContent = remainingGuess;
    wordSpan.textContent = userGuess;
    userSpan.textContent = guessedWords;

}



var findUserGuess = function (key) {
    var foundIndex = currentWord.indexOf(key)
    if (foundIndex === -1) {
        //not found!!!
    }
    else {
        // console.log("found");
        userGuess = setCharAt(userGuess, foundIndex, key);

    }
}








//sammy var
var wins = 0;
var remainingGuess = 10;
var noGuess = 0;
var word = ['vader', 'skywalker', 'kenobi', 'force'];
var userGuess = "";
var guessedWords = [];
var hasWon = false;


//DOM ELEMENTS

var winsSpan = document.getElementById("wins");
var wordSpan = document.getElementById("word");
var remainSpan = document.getElementById("remainingGuess");
var userSpan = document.getElementById("userGuess");
// var computerGuess = computerChoices["word"];

document.onKeyUp = function () {
    if (currentLetter === -1)
        remainspan--;
    console.log();
}


var checkGuess = function () {
    if (remainSpan.indexOf(word) === -1) {
        hasWon = true;
    }
};

//init section
var currentWord = word[Math.floor(Math.random() * word.length)];
initUserGuess();
updateHTML();
// console.log(currentWord)
document.onkeyup = function (event) {
    var currentLetter = event.key;
    findUserGuess(currentLetter);
    guessedWords.push(currentLetter);
    if (currentLetter != currentWord.length) {
        remainingGuess--;
    }
    if (remainingGuess === 0) {
        remainingGuess = 10;
        initUserGuess()
        updateHTML()
    };
    updateHTML();
}











