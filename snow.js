class Snow{
    constructor(){
          this.x = random(0, 1000);
          this.y = random(0, 400);
          this.image =loadImage("snow5.webp");
          this.next=createButton("NEXT");
          this.music=createButton("PRESS");
         
          }

          update() {
              this.y = this.y + 10;

              if (this.y > 500) {
                  this.x = random(0, 1000);
                  this.y = random(0, 700);
                  
              }
          }

          display() {
              imageMode(CENTER);
              image(this.image,this.x,this.y,70,70);
              this.next.position(displayWidth-100,700);
              this.next.style("color","orange");
              this.music.position(displayWidth-700,700);
              this.music.style("color","orange");

              
             

              this.next.mousePressed(()=>{
               
          
              nanna1.visible = true;
              nanna2.visible = true;
              nanna3.visible= true;
              cover.visible=false;
             
              
              
          
                })

                this.music.mousePressed(()=>{
                  backgroundMusic.loop()
                 
                 
                 
                
                })
               

                

              
             
              
          }
    
}