class Ground{
    constructor(x,y,w,h,o) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      this.o = o;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      if(this.o == 1)
      {
        fill("white");
        strokeWeight(1);
        stroke("black");
      } else
      {
        noFill();
        strokeWeight(2);
        stroke("white");
      }
    rect(pos.x, pos.y, this.w,this.h);
    }
  };