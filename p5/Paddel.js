class Paddel {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.width = ballSprite.width;
    this.height = ballSprite.height;
    this.icon = ballSprite;
    this.vx = 1;
    this.vy = -1;
  }
  show() {
    image(this.icon);
  }
  update() { }
}
