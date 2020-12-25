class Player{
    constructor(x,y,width,height) {
           var options={
               isStatic:true
           }
           this.body=Bodies.rectangle(x,y,width,height,options)
           this.height=height
           this.width=width
           World.add(wld,this.body)
        
    }

    display(){
        var pos=this.body.position
        player1=createSprite(pos.x,pos.y,this.width,this.height)
      //  rectMode(CENTER)
      //  fill ("yellow")
      //  rect (pos.x,pos.y,this.width,this.height)
     // background("white")
      if(keyDown("LEFT_ARROW")){
        player1.x=player1.x-1
        this.body.position.x=player1.x
    }
      drawSprites()
    }

  
}