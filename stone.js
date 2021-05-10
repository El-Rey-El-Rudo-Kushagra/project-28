class Stone {
    constructor(x,y,r){
        var options={
            isStatic:false,
        //bouncy thing
        restitution:0,
        //friction is friction
        friction:1,
        //and density is density
        density:1.2

        }
       this.radius=r;
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world,this.body)
        this.image=loadImage("stone.png")
    }
    display(){
        var paperPos=this.body.position;
        push ()
        translate (paperPos.x,paperPos.y)
        imageMode(CENTER)
        //rotate (this.angle)
        image (this.image,0,0,this.radius*2,this.radius*2)
        pop ()
    }
} 