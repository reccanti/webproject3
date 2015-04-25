// define an empty tile
function EmptyTile(ctx) {

    this.ctx = ctx;
    this.imagePath = "./Images/unoccupiedTile.png";

    // set image properties
    this.image = new Image();
    this.image.ready = false;

    this.image.onload = setAssetReady;
    this.image.src = this.imagePath;

    function setAssetReady() {
      this.ready = true;
    }

    this.preloader = setInterval(preloading, 100);
    // preload the image
    function preloading() {
      if (this.image.ready) {
        clearInterval(this.preloader);
      }
    }
}

EmptyTile.prototype.draw = function(x, y) {
  this.ctx.drawImage(this.image, x, y);
}


// defines an occupiedTile that extends the empty tile
function OccupiedTile() {
  this.imagePath = "./Images/occupiedTile.png";
}

OccupiedTile.prototype = new EmptyTile();
