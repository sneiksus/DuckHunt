class Duck{
   constructor(x,y,time,direction){
       this.x = x;
       this.y = y;
       this.timeBeforeFlyAway = time;
       this.direction = direction;
       this.isShot = false;
       this.skin = './assets/fly-animation.gif';
   }

   draw() {    
     var img = new Image();  
     img.src = this.skin;
     img.onload = function () {    
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     console.log('robe');
     ctx.drawImage(img,this.x, this.y);
     ctx.restore();
     }
    
   }

   move(){
         this.x+=10;
         this.y+=10;     
   }

  playAudio(){
    window.setInterval( function(){new Audio('./assets/Quack Quack.wav').play();},3000);  
   }
}