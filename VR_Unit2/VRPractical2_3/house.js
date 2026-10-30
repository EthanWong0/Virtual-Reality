

 class House{
  constructor(x,y,z){
    let house = document.createElement("a-entity");

 let base = document.createElement("a-box");
 base.setAttribute("scale","4 4 4");
 base.setAttribute("position","0 2 0");
 base.setAttribute("color","brown");
 house.append(base);
 
 let roof = document.createElement("a-cylinder");
 roof.setAttribute("position", "0 5 0");
 roof.setAttribute("scale","3.5 4.5 2.5");
 roof.setAttribute("rotation","-90 -90 0");
 roof.setAttribute("color","black");
 roof.setAttribute("segments-radial","3");
 house.append(roof);

 house.setAttribute("position",{x:x, y:0, z:z})
 scene.append(house);
  }
}