// make the canvas yellow
function test1() {

  var context = document.getElementById('canvas').getContext('2d');

  context.fillStyle = 'rgba(255,255,0,1)';
  context.rect(0,0,300,300);
  context.fill();

};


// print the board and add it to the document
function display() {

  // create new board
  var board = new Board(8,8);

  /*
  // write boardstring to document
  var printString = board.toString().replace(/\n/g,"<br />");
  var newParagraph = document.createElement('p');
  newParagraph.innerHTML = printString;
  document.getElementById("testDiv").appendChild(newParagraph);

  console.debug("[" + board.getPopulatedNeighbors(0,0).toString() + "]");
  */

};



//TEST
/*
var testImage = new Image();
testImage.src = "./Images/occupiedTile.png";
ctx.drawImage(testImage, 5, 5);
*/
/*
var testTile = new EmptyTile(ctx);
testTile.draw(0,0);
*/


window.onload = function() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext('2d');

  var board = new Board(20, 20);
  var display = new Display("myCanvas");

  /*
  // test
  var testImage = new Image();
  testImage.onload = function() {
    ctx.drawImage(testImage, 5, 5);
  }
  testImage.src = "./Images/occupiedTile.png";
  */

  display.cDisplay(board);

}

/*
var display = new Display("myCanvas");
var logic = new GameLogic();
var board = logic.newBoard(40, 16);
*/

/*
document.getElementById("submit").onclick = function() {

  // make the new board from the specified input
  numRows = document.forms["dimensions"]["numRows"].value;
  numCols = document.forms["dimensions"]["numCols"].value;
  board = logic.newBoard(numCols, numRows);

  //
  //ctx.drawImage(testImage, 5, 0);


  // display the new board
  newTextDisplay = display.textDisplay(board);
  oldTextDisplay = document.getElementById("display");
  if (oldTextDisplay != null) {
    document.getElementById("testDiv").replaceChild(newTextDisplay, oldTextDisplay);
  } else {
    document.getElementById("testDiv").appendChild(newTextDisplay);
  }

}

document.getElementById("randomize").onclick = function() {
  board = logic.newBoard(board.x, board.y);


  newTextDisplay = display.textDisplay(board);
  oldTextDisplay = document.getElementById("display");
  document.getElementById("testDiv").replaceChild(newTextDisplay, oldTextDisplay);

  display.cDisplay(board);

}

document.getElementById("next").onclick = function() {
    board = logic.getNext();
    newTextDisplay = display.textDisplay(board);
    oldTextDisplay = document.getElementById("display");
    document.getElementById("testDiv").replaceChild(newTextDisplay, oldTextDisplay);
}
*/
