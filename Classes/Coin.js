class Coin{
    constructor(x,y){
        this.coin = createSprite(x,y,5,5);
        this.coin.velocityX = -10;
    }
    display(){
        this.coin.velocityY = this.coin.velocityY + 0.8;
        drawSprites();
    }
    isTouching(player){
        if(this.coin.isTouching(player)){
            return true;
        }
    }
}