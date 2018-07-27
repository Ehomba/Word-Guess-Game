//array o' words
var word = ["cid", "cloud", "crystal","moogle", "chocobo"]
//choose words randomly
var randNum = Math.floor(Math.random() * word.length);
//variables
var rightWord = [];
var wrongWord = [];
var chosenWord = word[randNum];
var underScore = [];
var guessLeft = 15;
var wins = 0;
var loses = 0;
// Dom Mainpulation
 var docUnderscore = document.getElementById("underscores")
 var docRightguess = document.getElementById("rightGuess")
 var docWrongguess = document.getElementById("wrongGuess")
 var docWins = document.getElementById("wins")
 var docLoses = document.getElementById("loses")
 
//test and answer for grading
console.log(chosenWord);
//create underscores that match word length
var genUnderscores = () => {
    console.log('underscores being called');
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}

genUnderscores();

docUnderscore.innerHTML = underScore;

function reset() {
    guessLeft = 15;
    underScore = [];
    wrongWord = [];
    chosenWord = word[Math.floor(Math.random() * word.length)];
    genUnderscores();
    docUnderscore.innerHTML = underScore;
    docWrongguess.innerHTML = wrongWord;
}

function updateUnderScores(val) {
    var userGuess = val;
    var chosenWordSplit = chosenWord.split('');
    console.log(chosenWordSplit);
    for( var i = 0; i < chosenWord.length; i++ ){
        if ( userGuess === chosenWordSplit[i] ) {
            underScore[i] = userGuess;
        }
    }

    docUnderscore.innerHTML = underScore;

}



document.onkeyup = function(event) {

    var guess = event.key;

    var userGuess = guess.toLowerCase();

//check guess
//if right
if(chosenWord.includes(userGuess)){
    console.log('guess is correct');
    // rightWord.push(userGuess);
//replace underscore with correct letter
    updateUnderScores(userGuess);
    if (!underScore.includes('_')) {
        alert('You win');
        reset();
        wins++
        docWins.innerHTML = wins;
    }
} 
//if wrong push to wrong array
else {
    if ( guessLeft === 0) {
        alert('you Lose!');
        reset();
        loses++
    } else {

        wrongWord.push(userGuess)
        guessLeft--
        docWrongguess.innerHTML = wrongWord;
        docLoses.innerHTML = loses

    }
   
}
}
