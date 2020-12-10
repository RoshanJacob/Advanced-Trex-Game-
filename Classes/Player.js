class Player {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.player = createSprite(this.x, this.y, this.width, this.height);
  }
  jump() {
    this.player.velocityY = -13;
  }

  display() {
    this.player.velocityY = this.player.velocityY + 0.82;
    drawSprites();
  }
}
