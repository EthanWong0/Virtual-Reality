class Spike{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("scale",{x:0.3,y:0.3,z:0.3});
    scene.append(this.obj);
    let s1 = document.createElement("a-cone");
    s1.setAttribute("color","grey");
    s1.setAttribute("position",{x:x+1.5,y:y,z:z})
    s1.setAttribute("scale",{x:1,y:2,z:1});
    this.obj.append(s1);
    
    let s2 = document.createElement("a-cone");
    s2.setAttribute("color","grey");
    s2.setAttribute("position",{x:x+3.5,y:y,z:z});
    s2.setAttribute("scale",{x:1,y:2,z:1});
    this.obj.append(s2);
    
    let s3 = document.createElement("a-cone");
    s3.setAttribute("color","grey");
    s3.setAttribute("position",{x:x+2.55,y:y,z:z});
    s3.setAttribute("scale",{x:1,y:2,z:1});
    this.obj.append(s3);

  }

}