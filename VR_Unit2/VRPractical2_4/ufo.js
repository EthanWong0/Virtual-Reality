class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1,2)*0.001;
    this.obj = document.createElement("a-entity");
    scene.append(this.obj);

    let base = document.createElement("a-sphere");
    base.setAttribute("radius",0.5);
    base.setAttribute("scale",{x:2,y:2,z:2});
    base.setAttribute("color","green");
    base.setAttribute("position",{x:x,y:y,z:z});
    this.obj.append( base );

    let ring = document.createElement("a-torus");
    ring.setAttribute("radius",0.5);
    ring.setAttribute("scale",{x:2.5, y:2.5, z:1});
    ring.setAttribute("color","grey");
    ring.setAttribute("position",{x:x,y:y,z:z});
    ring.setAttribute("rotation",{x:90,y:90,z:90})
    this.obj.append(ring);

    let beam = document.createElement("a-cone");
    beam.setAttribute("radius",1);
    beam.setAttribute("scale",{x:1.5, y:3.5, z:1.5});
    beam.setAttribute("color","green");
    beam.setAttribute("position",{x:x,y:y-1.5,z:z});
    beam.setAttribute("opacity", 0.5);
    this.obj.append(beam);
    
  }

  fall(){
    
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < -39){
      this.obj.setAttribute("position",{x:this.x,y:-39,z:this.z});
    }
  }
}