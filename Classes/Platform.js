class Platform {
  constructor(x, y, width, height) {
    this.platform = createSprite(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = width;
  }
  isTouching(body) {
    if (this.platform.isTouching(body)) {
      return true;
    }
  }
  display() {
    drawSprites();
  }
}
