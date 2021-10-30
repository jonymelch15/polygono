class Block{
    constructor(x, y, width, height) {
        var options = {
         'restitution':0.4,
         
                   
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
        
    }
      display(){
        console.log(this.body.speed);
        
        var pos= this.body.position;
        push();
        if(this.body.speed < 10){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);

         }else{
           World.remove(world,this.body);
           this.visibility = this.visibility -5;
            tint(255, this.visibility);
            image(this.image,pos.x,pos.y,this.width, this.height);          
         }
         pop();
      }  
}
