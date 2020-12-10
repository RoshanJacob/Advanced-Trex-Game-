class Ground{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.ground = createSprite(this.x,this.y,this.width,this.height);
        this.ground.velocityX = -10;
    }
    loop(){
        if(this.ground.x < 50){
            this.ground.x = this.x;
        }
    }
    display(){
       drawSprites();
    }
}