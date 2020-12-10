class Obstacles{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.obstacle = createSprite(this.x,this.y,this.width,this.height);
        this.obstacle.shapeColor = "green";
    }
    display(){
       drawSprites();
    }
    isTouching(player){
        if(this.obstacle.isTouching(player)){
            return true;
        }
    }
}