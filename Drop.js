class Drop{
    constructor(){
          this.x = random(0, 1000);
          this.y = random(0, 400);
          this.image =loadImage("drop.png");
        
        
          }

          update() {
              this.y = this.y + 10;

              if (this.y > 500) {
                  this.x = random(0, 700);
                  this.y = random(0, 500);
                  
              }
          }

          display() {
           
              imageMode(CENTER);
              image(this.image,this.x,this.y,70,70);
             

            

              
          }
    
}