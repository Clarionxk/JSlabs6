function Point3D(x,y,z) {
    this. x=x||0;
    this. y=y||0;
    this. z=z||0;

Point3D.prototype.print3DPoint=function(p1,p2){
 result=Math.sqrt((p1.x-p2.x)^2+(p1.y-p2.y)^2+(p1.z-p2.z)^2);

 console.log(result);
}


}

var p1=new Point3D(9,8,7);
var p2=new Point3D(3,2,1);


p1.print3DPoint(p1,p2);