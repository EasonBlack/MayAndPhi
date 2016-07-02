class Light {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.w = 5;
        this.h = obj.h;
        this.ctx = obj.ctx;
        this.color = obj.color || '#006600';
        this.points = [];
        this.v = 5;
        this.a = 0;
    }

    addTarget(point) {
        this.points.push(point);
    }

    draw() {

        this.points.forEach((p)=>{
            this.ctx.beginPath();
            this.ctx.save();

            let _a = p.getAngle(this.x,this.y);
            let _w = p.getLightLen(this.x, this.y);
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(_a);
            this.ctx.fillRect(0, 0, _w, this.h);
            this.ctx.restore();
        });
        
        this.points.forEach((p)=> {
            p.draw();
        });
    }

    drawAll() {
        this.draw();
    }

}