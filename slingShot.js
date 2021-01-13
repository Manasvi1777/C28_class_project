class SlingShot
{
 constructor(body1,point2)
 {
    var options =
    {
      bodyA:body1,
      pointB:point2,
      stiffness:0.03,
      length:10
    }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
 }
   fly()
   {
     this.sling.bodyA=null;
   }
 display()
 {
     if (this.sling.bodyA)
     {
       var pointA = this.sling.bodyA.position;
       var pointB = this.sling.pointB;
     
       push()
       strokeWeight(5)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
       pop()
     }
 }
}