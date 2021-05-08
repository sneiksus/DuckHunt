class Duck{
   constructor(x,y,time,direction,speed){
       this.x = x;
       this.y = y;
       this.speed = speed
       this.timeBeforeFlyAway = time;
       this.direction = direction;
       this.isShot = false;
       this.time = 1;
       this.dx =Math.ceil(Math.random() * 3) *(Math.round(Math.random()) ? 1 : -1);
       this.dy =Math.ceil(Math.random() * 3) *(Math.round(Math.random()) ? 1 : -1);
       this.up = new Image();
       this.up.src='./assets/up.png';
       this.down = new Image();
       this.down.src='./assets/down.png';
       this.Flipped_up = new Image();
       this.Flipped_up.src='./assets/flipped-up.png';
       this.Flipped_down = new Image();
       this.Flipped_down.src='./assets/flipped-down.png';
       this.skin ='down';
       this.parts = [];
   }

   changeSkin() {
     const that = this;    
    window.setInterval( function(){
    if(that.skin == 'down')
    that.skin = 'up';
     else
     that.skin = 'down';
    },200);
    
   }
  draw(){
    console.log('draw');
    if(this.skin == 'up')
  this.dx>=1? ctx.drawImage(this.up,this.x, this.y,100,100):ctx.drawImage(this.Flipped_up,this.x, this.y,100,100);
   else
  this.dx>=1? ctx.drawImage(this.down,this.x, this.y,100,100):ctx.drawImage(this.Flipped_down,this.x, this.y,100,100);
  }

   flyAway(){
    this.y-=10;   
   }
   fallDown(){
    this.y+=10;   
    for(var r = 0;r<4;r++)
      this.parts[r].update();
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
         this.x+=this.dx*this.speed;
         this.y+=this.dy*this.speed;  
         this.time++;
         
       }
   }

   notify(b){
    if(this.x+80>=b.x && this.x<=b.x && this.y+70>=b.y && this.y<=b.y){
       this.isShot=true;
       for(var r=0;r<4;r++)
       this.parts.push(new Particle(b.x,b.y,2, (Math.random() - 0.5) * (Math.random() * 6), (Math.random() - 0.5) * (Math.random() * 6)))
       stat.ducks++;
    }
   }

 static playAudio(){
    window.setInterval( function(){new Audio('./assets/Quack Quack.wav').play();},3000);  
   }
}