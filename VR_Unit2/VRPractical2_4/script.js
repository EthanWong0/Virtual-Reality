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

    for(let i = 0; i < 100; i++){
    let ufos = new UFO(rnd(-50,50),rnd(20,50), rnd(-20,20));
    ufo.push(ufos);
  }
  loop();
})

 



function loop(){
   for(let rockets of rocket){
    rockets.launch();

   
    for(let ufos of ufo){
     while(ufos.y > 0){ 
      ufos.fall();
    
   }
  }
}
  
  window.requestAnimationFrame( loop );
}
