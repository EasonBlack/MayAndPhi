let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class Circle {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.r = obj.r;
        this.v = obj.v;
        this.a = obj.a;
        this.ctx = obj.ctx;
        this.color = obj.color || '#006699';

        VIEW_WIDTH.set(this, this.ctx.canvas.clientWidth);
        VIEW_HEIGHT.set(this, this.ctx.canvas.clientHeight);
    }

    setAngleAndSpeed(v) {
        this.a = v * Math.PI / 180;
        this.vx = this.v * Math.cos(this.a);
        this.vy = this.v * Math.sin(this.a);
    }

    setCircle() {
        this.x = this.x + this.vx;
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
        }
        if (this.x + this.r >= VIEW_WIDTH.get(this)) {
            this.x = VIEW_WIDTH.get(this) - this.r;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}