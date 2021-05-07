class Wave{
    constructor(complexity,ducksNum, bulletsNum, speed, useAudio){
        this.complexity = complexity;
        this.ducksNum = ducksNum;
        this.bulletsNum = bulletsNum;
        this.speed = speed;
        this.useAudio = useAudio;
        this.d = [];
        for(var i =0;i<this.ducksNum;i++){
            this.d.push(new Duck(Math.floor(Math.random() * (300 - 50 + 1)) + 50,Math.floor(Math.random() * (300 - 50 + 1)) + 50,1,i%2 ==0 ? 1:-1,speed));
            this.d[i].changeSkin();
        }
        document.getElementById("ammo").innerHTML = `<p>Ammo: ${this.bulletsNum}</p>`;
        document.getElementById("ducks").innerHTML = `<p>Ducks: ${this.ducksNum}</p>`;
    }
     

     checkColl(){
        for(var i=0;i<this.ducksNum;i++)
        for(var r=i+1;r<this.ducksNum;r++)
          if(this.d[i].x > this.d[r].x-10&&this.d[i].x < this.d[r].x+10&&this.d[i].y > this.d[r].y-10&&this.d[i].y > this.d[r].y-10){
            this.d[r].dx *= -1;
            this.d[r].dy *= -1;
          }
        
               
      }
     removeDuck(){
      this.d = this.d.filter(function( obj ) {
        return obj.isShot!= true&&obj.y>=-50;
      });
      this.ducksNum = this.d.length;
      document.getElementById("ducks").innerHTML = `<p>Ducks: ${this.ducksNum}</p>`;
     } 

      shot(e) { 
        var bullet = new Bullet(e.offsetX,e.offsetY);
       if(this.ducksNum>0&&this.bulletsNum>0)
       stat.bullets++;
        for(var i =0;i<this.ducksNum;i++)
          bullet.addObserver(this.d[i]);
          bullet.shot();
          document.getElementById("ammo").innerHTML = `<p>Ammo: ${--this.bulletsNum}</p>`;
          if(useAudio==true)
          bullet.playAudio();
      }

    gaming(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(var i =0;i<this.ducksNum;i++){
        this.d[i].move();
        this.d[i].draw();
        // this.checkColl();
        if(this.d[i].y>canvas.height+10||this.d[i].y<-50)
        this.removeDuck();
      }
     
        if(this.ducksNum!=0&&this.bulletsNum!=0)
        requestAnimationFrame(() => this.gaming());
        else{
        init();
        }
    
  
}
}