function preload() {
    img=loadImage('beautiful-landscape.webp');
    }
    
    function setup() {
    createCanvas(700,700);
    }
    
    function draw() {
    image(img,300,220,150,120);
    
    fill(66, 135, 245);
    stroke(255, 0, 0);
    rect(600,150,20,250);
      
    fill(66, 135, 245);
    stroke(255, 0, 0);
    rect(150,150,20,250);
      
    fill(66, 135, 245);
    stroke(255, 0, 0);
    rect(150,150,450,20);
      
    fill(66, 135, 245);
    stroke(255, 0, 0);
    rect(150,400,450,20);
      
    fill(245, 89, 22);
    stroke(128, 0, 0);
    ellipse(160, 160, 55, 55);
      
    fill(245, 89, 22);
    stroke(128, 0, 0);
    ellipse(610, 160, 55, 55);
    
    fill(245, 89, 22);
    stroke(128, 0, 0);
    ellipse(610, 410, 55, 55);
      
    fill(245, 89, 22);
    stroke(128, 0, 0);
    ellipse(160, 410, 55, 55);
    }