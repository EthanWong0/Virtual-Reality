let maze = [
  "-xxxxxxxxxxxxxxxxxxxxx",
  "-x-------------------x",
  "-x--oo----xox---xxxx-x",
  "-x---xxxxxx-xx--x--x-x",
  "-x-T-x-------x-Tx--x-x",
  "-xo-ox-------x--x--xox",
  "-xxxxx-------xT-x--xxx",
  "-------------x--x-----",
  "-------------x-Tx-----",
  "-------------x--xxxxxx",
  "-------------x--------",
  "-------------xxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})