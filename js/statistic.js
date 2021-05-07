class Stat{
    constructor(){
       this.ducks=0;
       this.bullets=0;
    }
    calc(){
      if(this.bullets!=0)
   return Math.round(this.ducks/this.bullets*100);
   }
 
}