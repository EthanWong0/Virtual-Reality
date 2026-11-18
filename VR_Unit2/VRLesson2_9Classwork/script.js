let maze = [
  "-xxxxxxxxxxxxxxxxxxxxx",
  "-x-------------------x",
  "-x--oo----xox---xxxx-x",
  "-x---xx-xxx-xx--x--x-x",
  "-x-T-xx------x-Tx--x-x",
  "-xo-oxx--x---x--x--xox",
  "-xxxxxx--x---xT-x--xxx",
  "------x--x---x--x-----",
  "------x--x---x-Tx-----",
  "---xxxx--xotox--xxxxxx",
  "---xo----xxxxx--------",
  "---xxxxxxx---xxxxxxxxx",
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