class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1,2)-0.9;
    this.obj = document.createElement("a-entity");
    scene.append(this.obj);

    let base = document.createElement("a-sphere");
    base.setAttribute("radius",0.5);
    base.setAttribute("scale",{x:1.25,y:5,z:1.25});
    base.setAttribute("color","grey");
    base.setAttribute("position",{x:x,y:y,z:z});
    this.obj.append( base );

    let fire = document.createElement("a-sphere");
    fire.setAttribute("radius",0.5);
    fire.setAttribute("scale",{x:0.5, y:3.5, z:0.5});
    fire.setAttribute("color","orange");
    fire.setAttribute("position",{x:x,y:y-3,z:z});
    fire.setAttribute("opacity",0.5);
    this.obj.append(fire);

    let top = document.createElement("a-cone");
    top.setAttribute("radius",0.5);
    top.setAttribute("scale",{x:0.5,y:5/3,z:0.5});
    top.setAttribute("color","red");
    top.setAttribute("position",{x:x,y:y+2.5,z:z});
    this.obj.append( top );
    
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}