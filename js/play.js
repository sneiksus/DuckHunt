var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var w = [new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true),new Wave(1,5,10,1,true)];
var stat = new Stat();
var ind =0;
var useAudio = false; 

 
function init() {
  ind++;
  document.getElementById("canv").onclick = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  var vl=new Wave(5,10,(ind*1.6),(ind*150+300));
   setTimeout(() => {
     st.style.display = 'none'; 
     document.getElementById("canv").onclick = (e) =>{vl.shot(e);};
   requestAnimationFrame(vl.LOOP());}, 2000); 
} 