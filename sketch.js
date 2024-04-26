function setup() {
  createCanvas(600, 400);
  background("#9E9E9E");
}

function draw() {
  stroke("#FFEB3B");
  fill("rgb(0,0,0)");


if(mouseIsPressed){
  rect(mouseX, mouseY, 40, 40);
}
}