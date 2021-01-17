class slingshot
{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
		
		this.bodyA=bodyA
		this.pointB=pointB
        this.slingshot=Constraint.create(options)
		World.add(world,this.slingshot)
	}

	attach(body){
		this.slingshot.bodyA=body;
	}

	fly()
	{
		this.slingshot.bodyA=null;
	}

	display()
	{
		if(this.slingshot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}