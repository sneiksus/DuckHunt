class Bullet extends Subject{
    constructor(x,y){
      super();
       this.x=x;
       this.y=y;
    }
    playAudio(){
        if(useAudio==true)
          new Audio('./assets/shot2.wav').play();
    }
    shot(){
      for (var index in this.observers) {
         var observer = this.observers[index]
         observer.notify(this)
    }
   }
  
 
}