class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("color","red");
    this.y = 0;
    this.dy = 0.1;
    this.obj.append( "a-sphere");
  }

  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
 fall(){
  this.y -= this.dy;
  this.obj.setAttribute("position",{x:0,y:20+this.y,z:0})
 }
}