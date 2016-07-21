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
        this.g = 1;
        this.vy = 0;
        this.slopes = [];
        this.turnPoint = {};
        this.a = null;
    }

    setCircle() {
        let flag = false;
        this.slopes.forEach((c)=> {
            if (this.x >= c.turnPoint.x && this.x <= c.xEnd && (VIEW_HEIGHT.get(this) - this.y <= c.height)) {
                this.x += this.v * Math.cos(c.a);
                this.y += this.v * Math.sin(c.a);
                flag = true;
            }
        });

        if (!flag) {
            this.x += this.v;
            if (this.y + this.r < VIEW_HEIGHT.get(this) ) {
                this.vy += this.g;
                this.y += this.vy;
            }
        }

        this.checkLimit();
    }

    setSlope(slope) {
        this.getTurnPoint(slope);
        this.slopes.push(slope);
    }

    //get the point the ball start go to slope
    getTurnPoint(slope) {
        //get angel between the line and x
        let a = Math.atan2(slope.yEnd - slope.yStart, slope.xEnd - slope.xStart);
        //get angel between line and the line(ball center to the start of the line)
        let b = (Math.PI - a) / 2;
        let len = this.r / Math.tan(b);
        slope.turnPoint = {x: slope.xStart + len, y: 0};
        slope.a = a;
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
            this.vy = 0;
        }
        if (this.x + this.r >= VIEW_WIDTH.get(this)) {
            this.x = VIEW_WIDTH.get(this) - this.r;
        }
    }

    drawCenter() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.slopes.forEach((c)=> {
            c.draw()
        });
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.drawCenter();

        this.setCircle();

    }


}