displayText = false;

function setup() {
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent("youAreAwesomeContainer");
}

function draw() {
  background(255);
  textSize(25);
  if (displayText) {
    fill(random(0, 255),random(0, 255), random(0, 255));
    text("You are awesome!",250,250);
  }
  else {
    fill(0);
    text("Click me!",250,250);
  }
}

function mouseClicked() {
  displayText = true;
}
