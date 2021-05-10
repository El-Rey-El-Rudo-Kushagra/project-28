
        class Tree{
            constructor(x,y){
                this.width=450;
                this.height=600;
                this.thickness=10;                      
                this.angle=0;
                this.bottomBody=Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true})

                World.add(world,this.bottomBody)
        
                this.image=loadImage("tree.png")
            }
            display(){
                var posBottom=this.bottomBody.position;
               
                push ()
                rectMode(CENTER);
                translate (posBottom.x,posBottom.y)
                rotate (this.angle)
                image (this.image,0-200,-this.height/2-200,this.width,this.height)
                pop ()
                console.log(-this.height/2-200)

      
    }
}