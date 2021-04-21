var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var timer
var tick

var d = [];


function shot(e) { 
  var bullet = new Bullet(e.offsetX,e.offsetY);
  for(var i =0;i<3;i++)
    bullet.addObserver(d[i]);
    bullet.shot();
}

function init() {
     for(var i =0;i<3;i++)
       d.push(new Duck(Math.random() * 50 - 5,Math.random() * 50 - 5,1,100,2))
       
    requestAnimationFrame(mainLoop);
}

function mainLoop() {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i =0;i<3;i++){
    d[i].move();
    d[i].draw();
    }
    requestAnimationFrame(mainLoop);
    }