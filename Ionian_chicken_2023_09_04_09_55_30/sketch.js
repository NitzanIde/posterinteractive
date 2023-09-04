let backgroundImage;
let isDrawing = false;
let prevX, prevY;

function preload() {
  backgroundImage = loadImage("Untitled-14-02.png"); 
}

function setup() {
  createCanvas(600, 800); // Set the canvas size
  background(backgroundImage);
   }

  function draw() {
  if (isDrawing) {
    stroke(36,77,226); // Set the stroke color to black
    strokeWeight(4); // Set the stroke weight
    line(prevX, prevY, mouseX, mouseY); // Draw a line from the previous mouse position to the current position
    prevX = mouseX;
    prevY = mouseY;
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (!isDrawing) {
      // Start drawing
      isDrawing = true;
      prevX = mouseX;
      prevY = mouseY;
    } else {
      // Stop drawing
      isDrawing = false;
    }
  }
}