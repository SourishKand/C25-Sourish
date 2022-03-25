class rotater{
    constructor(x, y, width, height, color, angle, angleSpeed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.angle = angle;
            this.angleSpeed = angleSpeed;

            var options = {
                isStatic :true
            }
            this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
            World.add(world, this.body);
        
        }
    
    show(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rotate(this.angle);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        this.angle+=this.angleSpeed;
        pop();
    }










}