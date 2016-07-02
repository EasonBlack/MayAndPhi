class Circle {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.r = obj.r;
        this.v = obj.v;
        this.color = obj.color || '#006699';
    }

    setCircle() {
        this.x += this.v;
        if (this.x + this.r >= VIEW_WIDTH) {
            this.v = -this.v;
            this.x = VIEW_WIDTH - this.r;
        }
        if (this.x - this.r <= 0) {
            this.v = -this.v;
            this.x = this.r;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
}