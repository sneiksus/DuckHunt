class Bullet{
    constructor(x,y,audio){
       this.x;
       this.y;
       this.audio=true;
    }
    playAudio(){
        if(this.audio==true)
          new Audio('./assets/shot.wav').play();
    }
}