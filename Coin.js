class Coin{
    constructor(a,b){
    // var options = {
    //     density :1.0
    // }
   this.bodies= Bodies.circle(a,b,30);
//    this.width = c;
//    this.height = d;
   //this.image = loadImage("coin.png")
    World.add(myworld, this.bodies);
    }


    display(){
            var pos = this.bodies.position;
            translate(pos.x, pos.y);
             ellipseMode(CENTER);
             fill("yellow");
             noStroke();
             ellipse(0,0,60,60)
            //image(this.image,0,0,60,60);
    }
}