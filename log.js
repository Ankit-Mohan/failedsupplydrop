class Log
{
    constructor (x,y,height,angle)
    {
        var options = 
        {
          restitution : 0.0,
          friction : 10.0

        }

    this.body = Bodies.rectangle(x,y,length,height,options);

    World.add(world,this.body);
    this.width =20;
    this.height=height;
    }
display()
{
    var pos = this.body.position;
    push();
    translate (pos.x,pos.y);
    rectMode (CENTER);
    fill("brown");
    rect(0,0,this.width,this.height);
    pop();
}

}