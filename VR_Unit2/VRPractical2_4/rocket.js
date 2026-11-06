class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(0.1,0.3);
    this.obj = document.createElement("a-entity");
    scene.append(this.obj);

    let base = document.createElement("a-sphere");
    base.setAttribute("radius",0.5);
    base.setAttribute("scale",{x:1.5,y:5,z:1.5});
    base.setAttribute("color","grey");
    base.setAttribute("position",{x:x,y:y,z:z});
    this.obj.append( base );

    let fire = document.createElement("a-sphere");
    fire.setAttribute("radius",0.5);
    fire.setAttribute("scale",{x:0.5, y:3.5, z:0.5});
    fire.setAttribute("color","red");
    fire.setAttribute("position",{x:x,y:y-3,z:z});
    this.obj.append(fire);
    
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}