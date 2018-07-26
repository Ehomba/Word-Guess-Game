//array o' words
var word = ["cid", "cloud", "crystal","moogle", "chocobo"]
//choose words randomly
var randNum = Math.floor(Math.random() * word.length);
//variables
var rightWord = [];
var wrongWord = [];
var chosenWord = word[randNum];
var underScore = [];
// Dom Mainpulation
 var docUnderscore = document.getElementsByClassName("underscores")
 var docRightguess = document.getElementsByClassName("rightGuess")
 var docWrongguess = document.getElementsByClassName("wrongGuess")
 
//test and answer for grading
console.log(chosenWord);
//create underscores that match word length
var genUnderscores = () => {
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}
console.log(genUnderscores());
//get user guess
document.onkeyup = function(event) {

    var guess = event.key;
    var userGuess = guess.toLowerCase();

//check guess
//if right
if(chosenWord.indexOf(userGuess) > -1){
    rightWord.push(userGuess);
//replace underscore with correct letter
    underScore[chosenWord.indexOf(userGuess)] = userGuess;
    docUnderscore[0].innerHTML = underScore.join(" ");
    docRightguess[0].innerHTML = rightWord;
    // checks to seeuserscore matches guesses
    if (underScore.join('') == chosenWord) {
        alert("You Win");
    }
} 
//if wrong push to wrong array
else {
    wrongWord.push(userGuess)
    docWrongguess[0].innerHTML = wrongWord;
}
}

