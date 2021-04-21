class Duck{
   constructor(x,y,time,direction){
       this.x = x;
       this.y = y;
       this.timeBeforeFlyAway = time;
       this.direction = direction;
       this.isShot = false;
       this.skin = './assets/fly-animation.gif';
       this.time = 1;
       this.dx =Math.random() * 10 - 5;
       this.dy =Math.random() * 10 - 5;
   }

   draw() {    
     var img = new Image();  
     img.src = this.skin;
     const that = this;
     img.onload = function () {    
     console.log('robe');
     ctx.drawImage(img,that.x, that.y,100,100);
     }
    
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
        if (this.x >= canvas.width || this.x <= 0) {
          this.dx *= -1
          }
          if (this.y >= canvas.height || this.y <= 0) {
          this.dy *= -1
          }
         this.x+=this.dx;
         this.y+=this.dy;  
         this.time++;   
       }
   }

   notify(b){
    if(this.x+80>=b.x && this.x<=b.x && this.y+70>=b.y && this.y<=b.y)
        d.isShot=true;
   }

  playAudio(){
    window.setInterval( function(){new Audio('./assets/Quack Quack.wav').play();},3000);  
   }
}