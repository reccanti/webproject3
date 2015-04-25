/*
 * Object Name: Board
 * Description: An object that defines a general board class.
 *      Designed to be extendable.  Uses the prototype pattern.
 */
function Board(rows, cols, boardArray) {

  // parameters
  this.y = rows;
  this.x = cols;

  // make an empty board object
  this.mkEmptyBoard = function() {
    var board = [];

    for(var i = 0; i < this.y; i++) {
      board.push([]);
      for (var j = 0; j < this.x; j++) {
        board[i][j] = 0;
      }
    }

    return board;
  }

  this.mkRandomBoard = function() {
    var board = [];

    for(var i = 0; i < this.y; i++) {
      board.push([]);
      for (var j = 0; j < this.x; j++) {

        // randomly assign a value of 0 or 1 to the board
        var randNum = Math.random();
        if (randNum < 0.5) {
          board[i][j] = 0;
        } else {
          board[i][j] = 1;
        }
      }
    }

    return board;
  }

  // if specified, create a new board from an array
  if (arguments[2]) {
    this.board = boardArray;
  } else {
    this.board = this.mkRandomBoard();
  }

}

// get the tile at a specific location
Board.prototype.getTile = function(x,y) {
  return this.board[y][x];
}

// display the board as a text grid
Board.prototype.toString = function() {
  var boardString = ""
  for(var i = 0; i < this.y; i++) {
    for (var j = 0; j < this.x; j++) {
      var valueString = this.board[i][j].toString();
      boardString = boardString.concat(" " + valueString);
    }
    boardString = boardString.concat("\n");
  }
  return boardString;
}

var test = { init: function () {} };
// get the populated neighbors of a single tile
// 1 is populated; 0 is not
Board.prototype.getPopulatedNeighbors = function(x, y) {

  // list of neighbors
  var neighborList = [];
  //console.debug(this.board[y][x]);

  /*
  *__
  ___
  ___
  */
  if (!(x-1 < 0) && !(y-1 < 0) && (this.getTile(x-1,y-1) === 1)) {
    neighborList.push([x-1,y-1]);
  }

  /*
  _*_
  ___
  ___
  */
  if (!(y-1 < 0) && (this.getTile(x, y-1) === 1)) {
    neighborList.push([x,y-1]);
  }

  /*
  __*
  ___
  ___
  */
  if (!(x+1 >= this.x) && !(y-1 < 0) && (this.getTile(x+1,y-1) == 1)) {
    neighborList.push([x+1,y-1]);
  }

  /*
  ___
  *__
  ___
  */
  if (!(x-1 < 0) && (this.getTile(x-1,y) == 1)) {
    neighborList.push([x-1,y]);
  }

  /*
  ___
  __*
  ___
  */
  if (!(x+1 >= this.x) && (this.getTile(x+1,y) == 1)) {
    neighborList.push([x+1,y]);
  }

  /*
  ___
  ___
  *__
  */
  if (!(x-1 < 0) && !(y+1 >= this.y) && (this.getTile(x-1,y+1) == 1)) {
    neighborList.push([x-1,y+1]);
  }

  /*
  ___
  ___
  _*_
  */
  if (!(y+1 >= this.y) && (this.getTile(x,y+1) == 1)) {
    neighborList.push([x,y+1]);
  }

  /*
  ___
  ___
  __*
  */
  if (!(x+1 >= this.x) && !(y+1 >= this.y) && (this.getTile(x+1,y+1) == 1)) {
    neighborList.push([x+1,y+1]);
  }

  return neighborList;
}
