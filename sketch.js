function setup() {
  createCanvas(400, 400);
background(220)}

function draw() {
     
  
  stroke("red");
  fill("blue");
   
  //console.log(mouseIsPressed)
 
      if (mouseIsPressed) {      
      rect(mouseX,mouseY,20, 35);
      }

}
