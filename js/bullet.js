class Bullet{
    constructor(x,y){
       this.x=x;
       this.y=y;
       this.audio=true;
    }
    playAudio(){
        if(this.audio==true)
          new Audio('./assets/shot2.wav').play();
    }
    shot(d){
       if(d.x+10>=this.x && d.x-10<=this.x && d.y+10>=this.y && d.y-10<=this.y)
       d.isShot=true;
    }
}