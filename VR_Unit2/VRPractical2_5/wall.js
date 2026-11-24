class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","red");
    this.obj.setAttribute("position",{x:x,y:y,z:z})
    this.obj.setAttribute("scale",{x:1,y:1,z:1});
    scene.append(this.obj);

  }
}