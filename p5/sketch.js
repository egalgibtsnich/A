let bgImg;
let paddelImg;

function preload() {
  bgImg = loadImage('Images/space.jpg');
  ballSprite = loadImage('Images/ball.png');
  paddelImg = loadImage('Images/paddel.png');
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.position(20, 20);
  ball = new Ball();
  paddel = new Paddel();
}

function draw() {
  background(0);
  image(bgImg, 0, 0, width, height);
  //image(ballImg, width/2, height/2,  ballImg.width, ballImg.height)
  image(bgImg, 0, 0, width, height);
  ball.show();
  ball.update();
  ball.checkEdges();
  paddel.show();
  paddel.update();
  if (ball.checkCollision(paddel)) {
    ball.vy *= -1
  }
}

function keyPressed() {
  return false;
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.width = ballSprite.width;
    this.height = ballSprite.height;
    this.icon = ballSprite;
    this.vx = 2;
    this.vy = -3;
  }

  show() {

    fill(250, 250, 0);
    ellipse(this.x, this.y, 30, 30);
  }
  update() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  checkEdges() {
    if (this.x >= width - (1 / 2 * ball.width) || this.x <= 0 + (1 / 2 * ball.height)) {
      this.vx = -this.vx;
    }
    if (this.y <= 0 + (1 / 2 * ball.height)) {
      this.vy = -this.vy;
    }
  }
  checkCollision(object) {
    return (this.x + this.width / 2 > object.x && this.x + this.width / 2 < object.x + object.width &&
      this.y + this.height > object.y && this.y < object.y  + object.height  )
    this.vy *= -1;

  }
}

class Paddel {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.width = paddelImg.width;
    this.height = paddelImg.height;
    this.icon = paddelImg;

  }
  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }
  update() {

    if (keyIsPressed) {

      if (keyCode == 39) {
        this.x += 5;
      }
      
    if (keyCode == 37) {
      this.x -= 5;
    }

  }
}
}