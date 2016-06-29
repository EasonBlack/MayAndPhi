let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class Circle {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.r = 5;
        this.vx = obj.vx;
        this.vy = obj.vy;
        this.g = 5;
        this.f = 0.5;
        this.ctx = obj.ctx;
        this.color = obj.color || '#006699';
        VIEW_WIDTH.set(this, this.ctx.canvas.clientWidth);
        VIEW_HEIGHT.set(this, this.ctx.canvas.clientHeight);
    }

    setCircle() {
        this.x +=  this.vx;
        this.vy += this.g;
        this.y = this.y + this.vy;
        this.checkLimit();
    }

    checkLimit() {
        if (this.x - this.r <= 0) {
            this.x = this.r;
        }
        if (this.y - this.r <= 0) {
            this.y = this.r;
        }
        if (this.y + this.r >= VIEW_HEIGHT.get(this)) {
            this.y = VIEW_HEIGHT.get(this) - this.r;
            this.vy = -1 * this.vy * this.f;
        }
        if (this.x + this.r >= VIEW_WIDTH.get(this)) {
            this.x = VIEW_WIDTH.get(this) - this.r;
        }
    }
}