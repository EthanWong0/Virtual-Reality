class Key{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    this.dy = 0.1;
    
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("scale",{x:0.3,y:0.3,z:0.3});
    scene.append(this.obj);
    let body = document.createElement("a-box");
    body.setAttribute("color","yellow");
    body.setAttribute("position",{x:x+1.5,y:y,z:z})
    body.setAttribute("scale",{x:2,y:0.3,z:0.4});
    this.obj.append(body);
    
    let teeth = document.createElement("a-box");
    teeth.setAttribute("color","yellow");
    teeth.setAttribute("position",{x:x+2.25,y:y-0.35,z:z});
    teeth.setAttribute("rotation",{x:0,y:90,z:90});
    teeth.setAttribute("scale",{x:0.4,y:0.4,z:0.2});
    this.obj.append(teeth);
    
    let teeth2 = document.createElement("a-box");
    teeth2.setAttribute("color","yellow");
    teeth2.setAttribute("position",{x:x+1.85,y:y-0.35,z:z});
    teeth2.setAttribute("rotation",{x:0,y:90,z:90});
    teeth2.setAttribute("scale",{x:0.4,y:0.4,z:0.2});
    this.obj.append(teeth2);

    let ring = document.createElement("a-torus");
    ring.setAttribute("color","yellow");
    ring.setAttribute("scale",{x:0.6,y:0.6,z:0.6});
    ring.setAttribute("position",{x:x,y:y,z:z});
    this.obj.append(ring);
  }

  float(){
    this.y += this.dy;
    if(this.y < 1 || this.y > 2){
      this.dy = -this.dy;
    }
  }
}