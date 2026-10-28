let scene 
let car 
let poke
let rocket
let sun
let dude

window.addEventListener("DOMContentLoaded",function() {

    screen = document.querySelector("a-scene");
    car = document.querySelector("#car");
    poke = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    sun = document.querySelector("#sun");
    dude = document.querySelector("#dude");

    car.a = 0;
    car.ax = -0.01;
    
    poke.a = 0;
    poke.ax = 0.1;
    
    rocket.a = 3;
    rocket.ax = 0.01;

    sun.a = 0;
    sun.ax = 0.001;
    
    dude.a = 1;
    dude.ax = 0.01
    loop();
})

function loop(){
    car.a += car.ax;
    car.setAttribute("position", `${car.a} 0 0`)

    poke.a += poke.ax;
    poke.setAttribute("rotation",{x:poke.a, y:0, z:0});

    rocket.a += rocket.ax;
    rocket.setAttribute("position", `0 ${rocket.a} 0`);
    
    sun.a += sun.ax;
    sun.setAttribute("opacity", sun.a);

    dude.a += dude.ax;
    dude.setAttribute("scale", {x:dude.a, y:dude.a, z:dude.a});
    window.requestAnimationFrame(loop);
}