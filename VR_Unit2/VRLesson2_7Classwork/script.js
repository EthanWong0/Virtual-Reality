let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudens = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  
   for(let x = 0; x < 30; x += 1){
      let dudes = new Dude(rnd(-15,15), 1, rnd(-15,15));
      dudens.push(dudes);
  }

  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let dudes of dudens){
    dudes.jump();
  }
  window.requestAnimationFrame( loop );
}