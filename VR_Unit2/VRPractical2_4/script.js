let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rocket = [], ufo = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  
  for(let i = 0; i < 100; i++){
    let rockets = new Rocket(rnd(-50,50),rnd(-50,50), rnd(-20,20));
    rocket.push(rockets);
  }
  loop();

    for(let i = 0; i < 50; i++){
    let ufos = new UFO(rnd(-30,30),rnd(40,50), rnd(-12.5,12.5));
    ufo.push(ufos);
  }
  loop();
})

 



function loop(){
   for(let rockets of rocket){
    rockets.launch();

   
    for(let ufos of ufo){
    
      ufos.fall();
    
   
  }
}
  
  window.requestAnimationFrame( loop );
}
