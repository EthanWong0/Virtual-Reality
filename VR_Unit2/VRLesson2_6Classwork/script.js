let scene;
let army = [];

window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.querySelector("#mech-1");
  loop();

    for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let m = new mech(x, 1, z);
      army.push(m);
    }
  }

 for(m in army){
  m.launch();
 }

function loop(){
 

  window.requestAnimationFrame( loop );
}