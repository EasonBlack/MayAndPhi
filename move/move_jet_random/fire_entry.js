class Entry {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.ctx = obj.ctx;
        this.num = obj.num;
        this.circles = [];
    }

    reset() {
        this.circles = [];
        this.createRandom();
    }

    createRandom() {
        for (var i = 0; i < this.num; i++) {
            let vx = (Math.random() - 0.5) * 10 + 1;
            let vy = -1 * Math.random() * 45 + 6;

            let circle = new Circle({
                x: this.x,
                y: this.y,
                vx: vx,
                vy: vy,
                ctx: this.ctx
            })
            this.circles.push(circle);
        }
    }

    setCircles() {
        for (var i = 0; i < this.circles.length; i++) {
            let circle = this.circles[i];
            circle.setCircle()
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < this.circles.length; i++) {
            let circle = this.circles[i];
            this.ctx.beginPath();
            this.ctx.fillStyle = circle.color;
            this.ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}