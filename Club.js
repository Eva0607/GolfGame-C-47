class Club extends BaseClass {
  constructor(x,y){
    super(x,y,185,100);
    this.image = loadImage("golfclub.png");
    this.angle = 30;
    this.image.scale = 2
    
    
    
  }

  display() {
    super.display();
  }
}
