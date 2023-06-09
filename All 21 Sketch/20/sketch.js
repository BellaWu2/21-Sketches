let myFont;
let liner;
let msg = [];

function preload() {
  myFont = loadFont("OpenSans-Bold.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  msg.push("H");
  
  liner = new lineMaker();
  strokeCap(SQUARE);
}

function draw() {
  background(255, 204, 204);
  liner.update();
}

function lineMaker() {
  this.msgswitch = 0;
  this.target = [];
  this.dart = [];
  this.moving = [];
  this.lerpvel = [];
  this.size = 45;
  this.count = -3;
  this.close = 0.05;
  
  
  let m = msg[this.msgswitch];
  this.anchor = myFont.textToPoints(m, 0, 0, 10, {
    sampleFactor: 10,
    simplifyThreshold: 0.0,
  });
  
  let centertext = 0;  
  for (let i = 0; i < this.anchor.length; i++) {
    this.anchor[i].x *= this.size;
    this.anchor[i].y *= this.size;
    if (centertext < this.anchor[i].x) {
      centertext = this.anchor[i].x;
    }
    this.moving.push(3);
  }
  let center = width/2-centertext/2;
  
  for (let i = 0; i < this.anchor.length; i++) {
    let setx = this.anchor[i].x+center;
    let sety = this.anchor[i].y+(height/2);

    this.target.push(createVector(setx,
                                  sety));
    this.dart.push(createVector(width/2,
                                height));
    
    this.lerpvel.push(random(0.1,0.32));
    
  }
  
  
  this.update = function() {
    this.count += 1;
    let last = this.anchor.length-1;
    let endDist = dist(this.target[last].x,
                       this.target[last].y,
                       this.dart[last].x,
                       this.dart[last].y);
    if (this.count > this.anchor.length &&
      endDist < this.close) {
      this.count = last;
      this.restart();
    }
    this.moving[this.count] = 1;
    for (let i = 0; i < this.anchor.length; i++) {
      let tarx = this.target[i].x;
      let tary = this.target[i].y;
      this.throw(i,tarx,tary);
    }
  };
  
  this.throw = function(i,tarx,tary){
    let dx = this.dart[i].x;
    let dy = this.dart[i].y;
    let tx = tarx;
    let ty = tary;
    let d = dist(dx,dy,tx,ty);

    if (d > this.close && this.moving[i]) {
      this.dart[i].x = lerp(this.dart[i].x,
                            this.target[i].x,
                            this.lerpvel[i]);
      this.dart[i].y = lerp(this.dart[i].y,
                            this.target[i].y,
                            this.lerpvel[i]);
    }
    push();
    strokeWeight(3);
    if (i > 0) {
      let distBetween = dist(this.dart[i].x,
             this.dart[i].y,
             this.dart[i-1].x,
             this.dart[i-1].y);
      if (distBetween < this.size*3) {
          stroke(0,255);
          strokeWeight(3);
        if (this.moving[this.anchor.length-
                        floor(this.anchor.length/4)]) {
          if (noise(i*0.02,frameCount*0.05) < 0.5) {
            stroke(0,255,255,random(35,255));
            strokeWeight(6);        
          }
        }
        line(this.dart[i].x,
             this.dart[i].y,
             this.dart[i-1].x,
             this.dart[i-1].y);
        }
      if (distBetween > this.size * 4) {
        stroke(200,255);
        strokeWeight(5);
        point(this.dart[i].x,
            this.dart[i].y);
      } 
    }
    pop();
  }
  
  this.restart = function() {
    this.target = [];
    this.dart = [];
    this.moving = [];
    this.lerpvel = [];
    this.count = 0;
    
    this.msgswitch += 1;
    if (this.msgswitch > msg.length-1) {
      this.msgswitch = 0;
    }
    let m = msg[this.msgswitch];
    this.anchor = myFont.textToPoints(m, 0, 0, 10, {
        sampleFactor: 4,
        simplifyThreshold: 0.0,
        });   
    let centertext = 0;  
    for (let i = 0; i < this.anchor.length; i++) {
      this.anchor[i].x *= this.size;
      this.anchor[i].y *= this.size;
      if (centertext < this.anchor[i].x) {
        centertext = this.anchor[i].x;
      }
      this.moving.push(0);
    }
    let center = width/2-centertext/2;
    for (let i = 0; i < this.anchor.length; i++) {
      let setx = this.anchor[i].x+center;
      let sety = this.anchor[i].y+(height/2);
      this.target.push(createVector(setx,
                                    sety));
      this.dart.push(createVector(width/2,
                                  height));
      this.lerpvel.push(random(0.5,0.4));
    }
  }
}






  