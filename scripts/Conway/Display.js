function Display(canvasId) {

  this.canvasId = canvasId;

  this.canvas = document.getElementById(canvasId);
  this.context = this.canvas.getContext("2d");

  //this.tileSheet = new Image();


  //var context = document.getElementById(canvasId).getContext("2d");

  /*
  var testTile = new Image();
  testTile.onload = function() {
    context.drawImage(testTile, 0, 0);
  }
  testTile.src = "./Images/unoccupiedTile.png";
  */

  /*
  // define tiles
  this.occupiedTile = new Image();
  var unoccupiedTile = new Image();

  unoccupiedTile.src = "./Images/unoccupiedTile.png"

  this.occupiedTile.onload = function() {
    this.context.drawImage(occupiedTile, 5, 5);
  }
  this.occupiedTile.src = "./Images/occupiedTile.png"
  */

}

// display the board as text
Display.prototype.textDisplay  = function(board) {

  // write boardstring to document
  var printString = board.toString().replace(/\n/g,"<br />");
  var newParagraph = document.createElement('p');
  newParagraph.id = "display";
  newParagraph.innerHTML = printString;

  return newParagraph;

}

// display the board on the canvas
Display.prototype.drawTile = function(src, x, y) {

  var tileImage = new Image();
  var context = this.context;

  tileImage.onload = function() {
    context.drawImage(tileImage, x, y);
  }
  tileImage.src = src;
}

Display.prototype.cDisplay = function(board) {

  /*
  // define tiles
  var occupiedTile = new Image();
  var unoccupiedTile = new Image();

  // define size of tiles
  var size = 5;

  var canvas = document.getElementById(this.canvasId);
  var context = canvas.getContext('2d');


  // draw tiles
  for(var i = 0; i < board.y; i++) {
    for (var j = 0; j < board.x; j++) {

      if (board.getTile(j, i) == 1) {
        this.occupiedTile.draw(j*size, i*size);
      } else {
        this.emptyTile.draw(j*size, i*size);
      }
    }
  }
  */
  var tileImage = new Image();
  var context = this.context;
  var size = 5;

  tileImage.onload = function() {
    for(var i = 0; i < board.y; i++) {
      for (var j = 0; j < board.x; j++) {

        if (board.getTile(j, i) == 1) {
          context.drawImage(tileImage, 0, 0, 5, 5, j*size, i*size, 5, 5);
        } else {
          context.drawImage(tileImage, 5, 0, 5, 5, j*size, i*size, 5, 5);
        }
      }
    }
  }
  tileImage.src = "./images/conway/tileSheet.png";
}
