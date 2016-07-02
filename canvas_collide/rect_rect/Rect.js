class Rect {
    constructor(obj) {
        this.x = obj.x ;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;
        this.left = this.x;
        this.right = this.x + this.w;
        this.top = this.y;
        this.bottom = this.y + this.h;
        this.color = obj.color;
        this.originColor = obj.color;
        this.ctx = obj.ctx;
    }

    resetRectByXY() {
        this.left = this.x;
        this.right = this.x + this.w;
        this.top = this.y;
        this.bottom = this.y + this.h;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x,this.y,this.w,this.h);
        this.ctx.strokeRect(this.x,this.y,this.w,this.h);
    }
}