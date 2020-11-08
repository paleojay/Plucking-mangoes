class mango {
    constructor(x, y, width, height, ) {
      var options = {
        isStatic: true,
          'restitution':0.3,
          'friction':0.5,
      }
      this.body =  Matter.Bodies.circle(x, y, 20, options);

      this.image = loadImage("Plucking mangoes/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  