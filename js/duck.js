class Duck{
   constructor(x,y,time,direction){
       this.x = x;
       this.y = y;
       this.timeBeforeFlyAway = time;
       this.direction = direction;
       this.isShot = false;
       this.time = 1;
       this.dx =Math.random() * 10 - 5;
       this.dy =Math.random() * 10 - 5;
       this.up = new Image();
       this.up.src='./assets/up.png';
       this.down = new Image();
       this.down.src='./assets/down.png';
       this.skin ='down';
   }

   changeSkin() {
     const that = this;    
    window.setInterval( function(){
    if(that.skin == 'down')
    that.skin = 'up';
     else
     that.skin = 'down';
     console.log(that.skin);
    },200);
    
   }
  draw(){
    if(this.skin == 'up')
   ctx.drawImage(this.up,this.x, this.y,100,100);
   else
   ctx.drawImage(this.down,this.x, this.y,100,100);
  }

   flyAway(){
    this.y-=10;   
   }
   fallDown(){
    this.y+=10;   
   }
   move(){
     if(this.isShot == false && this.time>1000)
       this.flyAway()
       else if(this.isShot == true)
       this.fallDown();
       else{
        if (this.x >= canvas.width-100 || this.x <= 0) {
          this.dx *= -1
          }
          if (this.y >= canvas.height-200 || this.y <= -20) {
          this.dy *= -1
          }
         this.x+=this.dx;
         this.y+=this.dy;  
         this.time++;
         
       }
   }

   notify(b){
    if(this.x+80>=b.x && this.x<=b.x && this.y+70>=b.y && this.y<=b.y){
       this.isShot=true;
       stat.ducks++;
    }
   }

  playAudio(){
    window.setInterval( function(){new Audio('./assets/Quack Quack.wav').play();},3000);  
   }
}