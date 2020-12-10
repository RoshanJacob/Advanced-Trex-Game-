class Cloud{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.cloud = createSprite(this.x,this.y,this.width,this.height);
        this.cloud.velocityX = -7;
    }
    display(){
       drawSprites();
    }
}