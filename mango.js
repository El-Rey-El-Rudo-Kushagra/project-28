class Mango {
    constructor(x, y){
        var options={
            isStatic:true,
            //bouncy thing
            restitution:0,
            //friction is friction
            friction:1,
        }    
       //this.radius=r;
      this.body=Bodies.circle(x,y,30,options)
      World.add(world,this.body)
      this.image = loadImage("mango.png");
      
    }
    display(){
        var pos=this.body.position  
        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        imageMode (CENTER)
    image (this.image,0,0,60,60)
    pop ()
    }
  };