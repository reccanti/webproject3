/*
function main() {

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  var logic = new GameLogic();
  var board = logic.newBoard(60, 60);
  var display = new Display("myCanvas");

  display.cDisplay(board);

  var intervalId = window.setInterval(function () {

    // load next board
    board = logic.getNext();

    // clear the canvas
    //context.clearRect(0, 0, 300, 300);

    // display the new board
    display.cDisplay(board);

  }, 250);

}

function animate(board, ) {

}

window.onload = main();
*/

var canvasId = "myCanvas";
var canvas = document.getElementById(canvasId);
var context = canvas.getContext("2d");

var logic = new GameLogic();
var board = logic.newBoard(60, 60);
var display = new Display(canvasId);
var intervalId = null;

function anim() {

  // load next board
  board = logic.getNext();

  // clear the canvas
  //context.clearRect(0, 0, board.x, board.y);

  // display the new board
  display.cDisplay(board);
}

function init() {
  display.cDisplay(board);
  intervalId = setInterval(anim, 80);
}


function randomize() {
  board = logic.newBoard(board.x, board.y);
  clearInterval(intervalId);
  context.clearRect(0, 0, canvas.width, canvas.height);
  display.cDisplay(board);
  intervalId = setInterval(anim, 80);
}

function newSize() {
  var numRows = document.forms["dimensions"]["numRows"].value;
  var numCols = document.forms["dimensions"]["numCols"].value;

  canvas.height = numRows*5;
  canvas.width = numCols*5;

  board = logic.newBoard(numCols, numRows);

  randomize();
}

window.onload = init;

document.getElementById("randomize").onclick = randomize;

document.getElementById("submit").onclick = newSize;
