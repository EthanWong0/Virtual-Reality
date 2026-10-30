class Cloud{
  constructor(x,y,z){
    let cloud = document.createElement("a-entity");

    let puff1 = document.createElement("a-sphere");
    puff1.setAttribute("color","white");
    puff1.setAttribute("position", "-1 0 0");
    cloud.append(puff1);

    let puff2 = document.createElement("a-sphere");
    puff2.setAttribute("color","white");
    puff2.setAttribute("position", "1 0 0");
    cloud.append(puff2);

    let puff3 = document.createElement("a-sphere");
    puff3.setAttribute("color","white");
    puff3.setAttribute("position", "0 1 0");
    cloud.append(puff3);
    
    cloud.setAttribute("position",{x:x, y:y, z:z})
    scene.append(cloud);
  }
}