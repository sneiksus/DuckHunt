var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var timer
var tick

var d = new Duck(1,1,100,2);


function shot(e) { 
  //here I need canvas mouse click coordinates
  var bullet = new Bullet(e.offsetX,e.offsetY);
  bullet.playAudio(); 
  bullet.shot(d); 
}

function init() {
  //  canvas = document.getElementById("canvas");
 //   ctx = canvas.getContext("2d");
    requestAnimationFrame(mainLoop);
}

function mainLoop() {
    tick++;
    d.move();
    d.draw();
    requestAnimationFrame(mainLoop);
    }