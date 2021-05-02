class Bullet{
    constructor(x,y){
       this.x=x;
       this.y=y;
       this.audio=true;
       this.observers =[];
    }
    playAudio(){
        if(this.audio==true)
          new Audio('./assets/shot2.wav').play();
    }
    shot(){
      stat.bullets++;
      for (var index in this.observers) {
         var observer = this.observers[index]
         observer.notify(this)
    }
   }
    addObserver(d){
      this.observers.push(d);
    }
    delObserver(d){
      var index = this.observers.indexOf(d)
      delete this.observers[index]
    }
 
}