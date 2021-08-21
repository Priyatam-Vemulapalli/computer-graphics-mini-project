var speed = 4;
var rain= [];
function setup() {
	createCanvas(1200, 500);
   for(var i = 0; i < 200; i++) {
    rain[i] = new Drop();
}
}
var car = {
	x: 0,
	g: 250
}
var sky ={
	col1: 255,
	col2: 220
}
function draw() {
    //for sky transition
	sky.col1 = map(car.x, 0, 1200, 250, 0);
	sky.col2 = map(car.x, 0, 1200, 220, 0);
  //for car color transition
	car.g = map(car.x, 0, 1200, 250, 0);
	background(0, sky.col2, sky.col1);
  
	//for stars
    noStroke();
	fill(0, 220, 255, 140);
	star(100,120, 5, 11.6, 5);
	star(280,260, 5, 11.6, 5);
	star(50,180, 5, 11.6, 5);
	star(300,200, 5, 11.6, 5);
    star(550,500, 5, 11.6, 5);
	star(900,180, 5, 11.6, 5);
    star(600,180, 5, 11.6, 5);
	star(800,20, 5, 11.6, 5);
    star(400,30, 11.6, 5);
	star(150,300.6, 5);
    star(800,200, 5, 11.6, 5);
    star(1180,50, 5, 11.6, 5);
	star(900,180, 5, 11.6, 5);
    star(1160, 15, 11.6, 5);
	star(350,50, 5, 11.6, 5);
    //for sun
	noStroke();	
	fill(255, 255, 0);
    ellipse(100,car.x/3,70)
    //for moon
    fill(255);
    ellipse(1100,450-car.x/3,70);
  
    //for road
	fill(200);
	rect(0, 250, 1200, 250);
    //for car
	fill(0, car.g, 0);
	rect(car.x, 198, 110, 50, 20);
    //for a small window
    fill(255);
    rect(car.x+18,210,50,20,20);
	fill(50);
    //for tires
	ellipse(car.x, 250, 40, 40);
	ellipse(car.x + 110, 250, 40, 40);
    //for car to come back
	if (car.x+110 >= width || car.x < 0) {
		speed = speed * -1;
	}
	car.x = car.x + speed;
  
    //to call rain methods
    for(var i = 0; i < 200; i++) {
      rain[i].show();
      rain[i].update();
  }
}
//method for rain
function Drop() {
  this.x = random(0, width);
  this.y = random(0, 0-height);
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y,random(2,5),random(2,5));   
  }
  this.update = function() {
    speed1 =random(5,10);
    change=1.1;
    this.y = this.y + speed1*change;  
    if (this.y > height) {
        this.y = 0;
      }
}
}
//for star function
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
//for song
let song;
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
function preload(){
    song = loadSound('bts.mp3');
}