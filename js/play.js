var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var timer
var tick

var d = new Duck(-10,-10,100,2);

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