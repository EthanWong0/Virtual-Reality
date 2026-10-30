let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-40,40);
    let z = rnd(-40,40);
    let tree = new Tree(x, 0 , z);
    let cloud = new Cloud(x, 20, z);
    let house = new House(x, 0, z);
  }

})
