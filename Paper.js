class Paper{
    constructor(x,y,radius){

        var options ={
          restitution : 0.3,
          friction: 1.5,
          density: 0.9,
          isStatic : false
        }
        this.body= Bodies.circle(x,y,(radius-20)/2,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }


    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        fill("pink");
        image(this.image,pos.x, pos.y,this.radius, this.radius);
    }
}