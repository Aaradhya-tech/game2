class Player{
    constructor(a,b){
    var options = {
    restitution: 1

    }
   this.bodies= Bodies.rectangle(a,b,70,100,options);
//    this.width = c;
//    this.height = d;

   this.image = loadImage("man.png")
    World.add(myworld, this.bodies);


    }

    jump(){
        Matter.Body.setVelocity(this.bodies,{x : 0, y : -6});
        
    }

    move(x,y){
        var pos = this.bodies.position;
        pos.x = pos.x + x
        pos.y = pos.y + y
    }

    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
        //  rotate(angle); 
         imageMode(CENTER); 
         image(this.image,0,0,70,100);
          pop();

    }
}
