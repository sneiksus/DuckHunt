class Observer{
     notify() {};
}

class Subject{
    constructor() {this.observers = []}
    addObserver(d){
        this.observers.push(d);
      }
      delObserver(d){
        var index = this.observers.indexOf(d)
        delete this.observers[index]
      }
    shot() {};  
}