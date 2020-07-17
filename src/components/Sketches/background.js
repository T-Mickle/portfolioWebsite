
export default 
function sketch(p) {
  let cols, rows
  let scl = 30;
  let w = 1800;
  let h = 1800;
  let terrain = []
  let flying = 0;
  
 
  
  
  
  p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
      
  
      
      cols = w / scl;
      rows = h / scl;
  
      for ( let x = 0; x < cols ; x ++) {
  
  
          terrain.push([]) 
  
          for (let y = 0; y < rows ; y++) {
  
              terrain[x].push(0)
  
              
  
          }
          
  
      }
  
     
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // if (props.windowWidth){
    //   windowW =props.windowWidth
    // }
  };
  
  p.draw = function() {
  
      p.background(0,0,0,0)
    
     

      flying -= 0.08;
  
      // if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
      //     flying -= 0.1
  
      // }
      var yoff = flying;

      for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
          terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -200, 150);
          xoff += 0.2;
        }
        yoff += 0.1;
      }
  
  
  
      
  
  
  
      
      p.noStroke()
      p.fill(0,100, 250,150)
  
      // let mX = p.map( p.mouseX, 0, p.width, -300,-350)
      // let mY = p.map( p.mouseY, 0, p.height, 0,-60)
      // p.translate(mX,mY)
      p.rotateX(p.PI/3)
      p.translate( -w/2, -h/2)
      
      for (let y = 0; y < rows -1  ; y++) {
          
          p.beginShape(p.TRIANGLE_STRIP);
          
          for (let x = 0; x < cols; x++) {
  
              p.vertex(x *scl, y * scl , terrain[x][y])
              p.vertex(x *scl, (y+1) * scl , terrain[x][y+1])
  
            
              
          }
  
          p.endShape()
      }
  
      
  }
  
  
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    
    }
  
};