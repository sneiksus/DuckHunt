
var audio = new Audio('./assets/sounds-of-ducks.wav');
audio.loop=true;

function instructions(){
    document.getElementById('instructions').style.visibility = 'visible';
}

function closed(){
    document.getElementById('instructions').style.visibility = 'hidden';
}


function level(){
    if(document.getElementById('level').innerText == 'EASY')
    document.getElementById('level').innerText = 'NORMAL';
    else if(document.getElementById('level').innerText == 'NORMAL')
    document.getElementById('level').innerText = 'HARD';
    else
    document.getElementById('level').innerText = 'EASY';
}

function play(){
    var canv = document.getElementById('menu').style.display = 'none';
    document.getElementById('canv').style.display = 'block';
    document.getElementById('gameover').style.visibility = 'visible';
     init();
    
  //  document.getElementById('canv').onclick = function() { var a = new Bullet(1,1,true);
  //  a.playAudio(); }
}

function finish(){
    document.getElementById('gameover').style.visibility = 'hidden';
}

function mute(){
    if(document.getElementById('sound').innerText == 'MUTE'){
    document.getElementById('sound').innerText = 'UNMUTE';
    audio.pause();
}
else{
    document.getElementById('sound').innerText = 'MUTE';
    audio.play();   
    }
}