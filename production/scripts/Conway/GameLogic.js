function GameLogic() {
  this.board = new Board(5, 5);
}

// create a new random board configuration
GameLogic.prototype.newBoard = function(x, y) {
  this.board = new Board(x, y);
  return this.board;
}

// simulate dying by underpopulation
GameLogic.prototype.underpopulated = function(x, y) {
  if ((this.board.getTile(x, y) == 1) &&
  (this.board.getPopulatedNeighbors(x, y).length < 2)) {
    return true;
  }
  return false;
}

// simulate dying by overpopulation
GameLogic.prototype.overpopulated = function(x, y) {
  if ((this.board.getTile(x, y) == 1) &&
  (this.board.getPopulatedNeighbors(x, y).length > 3)) {
    return true;
  }
  return false;
}

// simulate reproduction
GameLogic.prototype.reproduction = function(x, y) {
  if ((this.board.getTile(x, y) == 0) &&
  (this.board.getPopulatedNeighbors(x, y).length == 3)) {
    return true;
  }
  return false;
}

// get the next conway configuration
GameLogic.prototype.getNext = function() {

  // create a new array according to Conway's rules
  var boardArray = [];
  var testCount = 0;

  for(var i = 0; i < this.board.y; i++) {
    boardArray.push([]);
    for (var j = 0; j < this.board.x; j++) {
      boardArray[i][j] = 0;
    }
  }

  for(var i = 0; i < this.board.y; i++) {
    for (var j = 0; j < this.board.x; j++) {
      testCount++;
      //console.debug(testCount);

      if (this.underpopulated(j, i)) {
        boardArray[i][j] = 0;
      } else if (this.overpopulated(j, i)) {
        boardArray[i][j] = 0;
      } else if (this.reproduction(j, i)) {
        boardArray[i][j] = 1;
      } else {
        boardArray[i][j] = this.board.getTile(j, i);
      }
    }
  }

  // create a new board with the array
  this.board = new Board(this.board.x, this.board.y, boardArray);

  return this.board;
}
