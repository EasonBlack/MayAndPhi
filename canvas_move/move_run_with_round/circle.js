let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class Circle {
    constructor(obj) {
        VIEW_WIDTH.set(this, obj.ctx.canvas.clientWidth);
        VIEW_HEIGHT.set(this, obj.ctx.canvas.clientHeight);

        this.r = obj.r;
        this.v = obj.v;
        this.ctx = obj.ctx;
        this.color = obj.color || '#006699';
        this.x = 0 + this.r;
        this.y = VIEW_HEIGHT.get(this) - this.r;
        this.xOther = this.x + this.r;
        this.yOther = this.y;
        this.setAngle();
    }

    setCircle() {
        this.x += this.v;
        this.xOther += this.v;
        this.checkLimit();
    }

    setAngle() {
        let _angle = this.v * 180 / (Math.PI * this.r)
        this.pa = _angle * Math.PI / 180;
    }

    setOther() {
        let _xo = this.xOther - this.x;
        let _yo = this.yOther - this.y;
        let _x = _xo * Math.cos(this.pa) - _yo * Math.sin(this.pa);
        let _y = _xo * Math.sin(this.pa) + _yo * Math.cos(this.pa);
        this.xOther = _x + this.x;
        this.yOther = _y + this.y;
    }

    checkLimit() {
        if (this.x - this.r <= 0) {
            this.x = this.r;
            this.v = -this.v;
            this.pa = - this.pa;
        }
        if (this.x + this.r >= VIEW_WIDTH.get(this)) {
            this.x = VIEW_WIDTH.get(this) - this.r;
            this.v = -this.v;
            this.pa = - this.pa;
        }
    }

    drawCenter() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawLine() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.xOther, this.yOther);
        this.ctx.stroke();
    }

    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.drawLine();
        this.drawCenter();
        this.setCircle();
        this.setOther();

    }


}