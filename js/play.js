var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var w = [new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true)];
 var stat = new Stat();

// function shot(e) { 
//   var bullet = new Bullet(e.offsetX,e.offsetY);
//   for(var i =0;i<3;i++)
//     bullet.addObserver(d[i]);
//     bullet.shot();
//     document.getElementById("ammo").innerHTML = `<p>Ammo: ${--bullets}</p>`;
//     bullet.playAudio();
// }

// function checkColl(){
//   for(var i=0;i<3;i++)
//   for(var r=i+1;r<3;r++)
//     if(d[i].x > d[r].x-10&&d[i].x < d[r].x+10&&d[i].y > d[r].y-10&&d[i].y > d[r].y-10){
//       d[r].dx *= -1;
//       d[r].dy *= -1;
//     }
  
         
// }

function init() {
     for(var i=0;i<5;i++){
      document.getElementById("canv").addEventListener("click", function(event) {
        w[i].shot(event);
      }, false);
     w[i].gaming();
     var st = document.getElementById("gameover");
     st.innerHTML = `<p id='wave'>${i+1}</p> `;
     st.style.display = 'block';
     setTimeout( st.style.display = 'none', 1000);
    }
  } 

// function mainLoop() {
//     tick++;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(var i =0;i<3;i++){
//     d[i].move();
//     d[i].draw();
//     checkColl();
//     }
//     console.log(stat.ducks);
//     console.log(stat.bullets);
//     console.log(stat.calc());
//     requestAnimationFrame(mainLoop);
//     }