class Cannon{
 constructor(x,y,width,height,angle)  {
    this.x = x;
    this.y = y ;
    this.height = height;
        this.width = width;
    this.angle = angle;
     }
display(){
  push()
    translate(this.x,this.y)
   rotate(this.angle)
    rect(-10,-20 ,this.width,this.height)
pop()
    arc(this.x-40,this.y+90,50,50,PI,TWO_PI)

}
    } 
