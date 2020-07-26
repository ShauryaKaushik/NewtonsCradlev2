class Bob{
  constructor(x, y,radius) {
      var options = {
          "isStatic" : false,
          'restitution':1,
          'friction':0,
          'density':1.5,
          'inertia':Infinity,
          'frictionAir':0   
      }
     
      this.body = Bodies.circle(x, y,radius,options);
      this.width = radius;
      this.height = radius;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("green");  
      ellipseMode(RADIUS);
      ellipse(0, 0,this.width,this.height);
      pop();
    }
}
