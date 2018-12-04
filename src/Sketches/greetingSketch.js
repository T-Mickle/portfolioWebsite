
import Font from '../Sketches/Pacifico-Regular.ttf'

export default 
function sketch(p) {
let font;
let vehicles = [];

 p.preload = function () {
    font = p.loadFont(Font)
}


 p.setup = function () {
    p.createCanvas (600,window.innerHeight)
    p.background(0)
 
        let pts = font.textToPoints('Greetings', 30, 130, 128,
        {
            sampleFactor: .09,
            simplifyThreshold: 0
        })
       
    
        for (let pt of pts) {
            let vehicle = new Vehicle(pt.x,pt.y)
            vehicles.push(vehicle)
    
        }
    

   
  
}

// p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     font = props.font
    
//   };

 p.draw = function () {

   
    p.background (0)
   
  
    
    for (let vehicle of vehicles) {
        vehicle.update();
        vehicle.show();
        vehicle.behaviors()
        
    }
   
}



function Vehicle (x,y) {
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.target = p.createVector(x,y)  ;
    this.vel = p.createVector(0,0);
    this.acc = p.createVector() ;
    this.maxSpeed = 15;
    this.maxForce = 1

    
                           
}

Vehicle.prototype.behaviors = function () {
    let arrive = this.arrive( this.target);
    

    let mouse = p.createVector(p.mouseX, p.mouseY);
    let flee = this.flee(mouse)

    arrive.mult(1);
    flee.mult(5);
    this.applyForce(flee)
    this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function (f) {
    this.acc.add(f)
}

Vehicle.prototype.flee = function (target) {
    let targetCopy = target.copy()
    let desired = targetCopy.sub( this.pos);
    let d = desired.mag()
    if (d<80) {
    desired.setMag(this.maxSpeed);
    desired.mult(-1)
    let steering = desired.sub(this.vel);
    steering.limit(this.maxForce)
    
    return steering } else {
        return p.createVector(0,0)
    }
}

Vehicle.prototype.arrive = function (target) {
    let targetCopy = target.copy()
    let desired = targetCopy.sub( this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
         speed = p.map (d,0,100,0, this.maxSpeed)
    }
    desired.setMag(speed);
    let steering = desired.sub( this.vel);
    steering.limit(this.maxForce)
    return steering
}

Vehicle.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0)
}


Vehicle.prototype.show = function () {
    p.stroke(0,100, 250,255);
    p.strokeWeight(4);
    p.rectMode(p.CENTER)
    p.rect(this.pos.x, this.pos.y, .5,.5)
}
}