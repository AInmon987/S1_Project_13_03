"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Austin Inmon
   Date:   3.27.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
// All letters in the crossword puzzle.
var allLetters;
// Letters currently selected on the puzzle.
var currentLetter;
// Letters used in curently selected aross and down clues.
var wordLetters;
// Across clue curently selected on the puzzle
var acrossClue;
// Down clue curently selected on the puzzle
var downClue;
//stores the current typing direction. 
var typeDirection = "right";
// tells to run the init function once the page is fully loaded. 
window.onload = init;
// sets up the inital conditons to the puzzle.
function init() {
    allLetters = document.querySelectorAll("table#crossword span");

    currentLetter = allLetters[0];

    var acrossID = currentLetter.getAttribute("data-clue-a");

    var downID = currentLetter.getAttribute("data-clue-d");

    acrossClue = document.getElementById(acrossID);

    downClue = document.getElementById(downID);

}
//Formats the appearance of the puzzle given the selected puzzle letter
function formatPuzzle(puzzleLetter) {
    currentLetter = puzzleLetter;
    for (var i = 0; i < allLetters.length; i++) {
        allLetters[i].style.backgroundColor = "";
    }
    acrossClue.style.color = "rgb(96,96,28)";
    downClue.style.color = "rgb(96,96,28)";

    if (currentLetter.dataset.clueA != undefined) {
        acrossClue = document.getElementById(currentLetter.dataset.clueA);
        acrossClue.style.color = "blue";
    }
}










/*====================================================*/

function getChar(keyNum) {
    return String.fromCharCode(keyNum);
}