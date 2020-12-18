class ball{
    constructor(x,y,r){
     var options={
         "restitution":1, 
         "friction":0.5,
         "density":1.2,
     }
     this.body=Bodies.circle(x,y,r,options)
     this.x=x
     this.y=y
     this.r=r
     World.add(world,this.body)
    }
    display(){
var ballpos= this.body.position
push()
translate(ballpos.x,ballpos.y)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)
pop()
    }
}