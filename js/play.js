var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var w = [new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true)];
 var stat = new Stat();
var ind =0;
var useAudio = false;
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

// function init() {
//      for(var i=0;i<5;i++){
//       document.getElementById("canv").addEventListener("click", function(event) {
//         w[i].shot(event);
//       }, false);
//      w[i].gaming();
//      var st = document.getElementById("gameover");
//      st.innerHTML = `<p id='wave'>${i+1}</p> `;
//      st.style.display = 'block';
//      setTimeout( st.style.display = 'none', 1000);
//     }
//   } 

function init() {
  ind++;
   if(ind==6){
     if(stat.calc()>parseInt(localStorage.getItem('record')))
     localStorage.setItem("record",stat.calc());
          var st = document.getElementById("gameover");
          st.innerHTML = ` <h1>Game Over</h1>  <p>Killed: ${stat.ducks}</p> <p>Used ammo: ${stat.bullets}</p> <p>Accuracy: ${stat.calc()}%</p> <hr> <button id='close' onclick='finish()'>    END    </button>`;
          st.style.display = 'block';
          return;
        }
  var st = document.getElementById("wave");
  st.innerHTML = ind;
  st.style.display = 'block';
  setTimeout(() => st.style.display = 'none', 2000);
  var vl=new Wave(1,5,10,ind*2,true);
  console.log(ind)
   document.getElementById("canv").addEventListener("click", function(event) {
     vl.shot(event);
   }, false);
  vl.gaming();
} 

function next(){
  ind++;
  var st = document.getElementById("gameover");
      st.innerHTML = `<p id='wave'>${ind+1}</p> `;
      st.style.display = 'block';
     setTimeout( st.style.display = 'none', 1000);
  document.getElementById("canv").addEventListener("click", function(event) {
    w[ind].shot(event);
  }, false);
 w[ind].gaming();
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