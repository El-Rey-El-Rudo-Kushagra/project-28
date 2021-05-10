class Launcher{
    constructor(bodyA, B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.004,
            length: 1
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
    this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }
} 