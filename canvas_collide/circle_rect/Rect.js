class Rect {
    constructor(obj) {
        this.x = obj.x;
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
        this.vleft = null;
        this.vright = null;
        this.vtop = null;
        this.vbottom = null;
    }

    setRectVirtual(r) {
        this.vleft = this.left - r;
        this.vright = this.right + r;
        this.vtop = this.top - r;
        this.vbottom = this.bottom + r;
        this.p1 = {x: this.left,y: this.top};
        this.p2 = {x: this.right,y: this.top};
        this.p3 = {x: this.right,y: this.bottom};
        this.p4 = {x: this.left,y: this.bottom};
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
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}