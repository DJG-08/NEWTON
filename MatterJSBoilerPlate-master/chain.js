class Chain {
    constructer(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY }
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)

        chain1 = new Chain(paper.body,ground.body,-paperDiameter*2,0)
    }
    display(){
         var pointA=this.chain.bodyA.position
         var pointB =this.chain.bodyB.position
         strokeWeight(2)
         var Anchor1X = pointA.x
         var Anchor1Y = pointA.y
         var Anchor2X = pointB.x+this.offsetx
         var Anchor2Y = pointB.y+this.offsety
         line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
}