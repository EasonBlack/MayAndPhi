class Point {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.ctx = obj.ctx;
    }

    setCircle(circle) {
        this.circles || (this.circles = [])
        this.circles.push(circle);
    }

    reset() {
        this.circles.forEach((c)=> {
            c.x || (c.x = this.x + c.R)
            c.y || (c.y = this.y)
            var _c = {
                x: c.x - this.x,
                y: c.y - this.y
            }
            let _x = _c.x * Math.cos(c.pa) - _c.y * Math.sin(c.pa);
            let _y = _c.x * Math.sin(c.pa) + _c.y * Math.cos(c.pa);
            c.x = _x + this.x;
            c.y = _y + this.y
        })
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.circles.forEach((c)=> {
            this.ctx.beginPath();
            this.ctx.strokeStyle = c.color;
            this.ctx.arc(this.x, this.y, c.R, 0, 2 * Math.PI)
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.fillStyle = c.color;
            this.ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
            this.ctx.fill();
        })

    }
}