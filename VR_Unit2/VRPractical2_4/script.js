let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rocket = [], ufo = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  
  for(let i = 0; i < 20; i++){
    let rockets = new Rocket(rnd(-20,20),rnd(-20,20));
    rocket.push(rockets);
  }
  loop();
})

function loop(){
   for(let rockets of rocket){
    rockets.launch();
  }
  
  window.requestAnimationFrame( loop );
}
