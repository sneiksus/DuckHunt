var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var timer
var tick
var bullets = 15;
var ducks = 3;
var d = [];


function shot(e) { 
  var bullet = new Bullet(e.offsetX,e.offsetY);
  for(var i =0;i<3;i++)
    bullet.addObserver(d[i]);
    bullet.shot();
    document.getElementById("ammo").innerHTML = `<p>Ammo: ${--bullets}</p>`;
    bullet.playAudio();
}

function checkColl(){
  for(var i=0;i<3;i++)
  for(var r=i+1;r<3;r++)
    if(d[i].x > d[r].x-10&&d[i].x < d[r].x+10&&d[i].y > d[r].y-10&&d[i].y > d[r].y-10){
      d[r].dx *= -1;
      d[r].dy *= -1;
    }
  
         
}

function init() {
     for(var i =0;i<3;i++){
       d.push(new Duck(Math.random() * 50 - 5,Math.random() * 50 - 5,1,100,2));
       d[i].playAudio();
       d[i].changeSkin();
     }
       
    requestAnimationFrame(mainLoop);
}

function mainLoop() {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i =0;i<3;i++){
    d[i].move();
    d[i].draw();
    checkColl();
    }
    requestAnimationFrame(mainLoop);
    }