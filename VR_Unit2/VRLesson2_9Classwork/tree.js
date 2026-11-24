class Spike{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("color","grey");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}