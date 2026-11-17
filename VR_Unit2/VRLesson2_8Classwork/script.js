let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -1;
  
  orbit = document.querySelector("#orbit");
  orbit.a = 0;
  orbit.da = 0.01;

  loop();
})

function loop(){
  target.a += target.da;
  
  orbit.a += orbit.da;
  orbit.object3D.rotation.x = orbit.a;
    if(target.a < -90){
    target.da = 0;
  }

  if(orbit.a > 1.6){
    orbit.da = 0;
  }

  

  window.requestAnimationFrame( loop );
}