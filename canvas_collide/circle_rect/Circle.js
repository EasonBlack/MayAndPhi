let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class Circle {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.r = obj.r;
        this.color = obj.color;
        this.originColor = obj.color;
        this.ctx = obj.ctx;
        this.obstacles = [];
        this.v = 5;
        VIEW_WIDTH.set(this, this.ctx.canvas.clientWidth);
        VIEW_HEIGHT.set(this, this.ctx.canvas.clientHeight);

        $(document).on('keydown', (e)=> {
            this.setCircle(e.keyCode.toString());
        });
    }

    addObstacle(rect) {
        this.obstacles.push(rect);
    }

    setCircle(keyCode) {
        switch (keyCode) {
            case '37':   //left
                this.x -= this.v;
                break;
            case '39':  //right
                this.x += this.v;
                break;
            case '38':  //up
                this.y -= this.v;
                break;
            case '40':   //down
                this.y += this.v;
                break;
        }
        this.checkEdge();
    }

    checkEdge() {
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

    checkCollide() {
        this.color = this.originColor;
        this.obstacles.forEach((o)=> {
            o.color = o.originColor;
            o.setRectVirtual(this.r);
            if (this.x >= o.vleft && this.x <= o.vright && this.y >= o.vtop && this.y <= o.vbottom) {

                this.color = '#ff7373';
                o.color = '#00cc00';

                if ((this.x >= o.vleft && this.x <= o.left && this.y >= o.vtop && this.y <= o.top)
                    || (this.x >= o.right && this.x <= o.vright && this.y >= o.vtop && this.y <= o.top)
                    || (this.x >= o.right && this.x <= o.vright && this.y >= o.bottom && this.y <= o.vbottom)
                    || (this.x >= o.vleft && this.x <= o.left && this.y >= o.bottom && this.y <= o.vbottom)
                ) {
                    if ((Math.pow(this.x - o.p1.x, 2) + Math.pow(this.y - o.p1.y, 2) >= this.r * this.r)
                        && (Math.pow(this.x - o.p2.x, 2) + Math.pow(this.y - o.p2.y, 2) >= this.r * this.r)
                        && (Math.pow(this.x - o.p3.x, 2) + Math.pow(this.y - o.p3.y, 2) >= this.r * this.r)
                        && (Math.pow(this.x - o.p4.x, 2) + Math.pow(this.y - o.p4.y, 2) >= this.r * this.r)
                    ) {
                        this.color = this.originColor;
                        o.color = o.originColor;
                    }
                }
            } else {

            }
        });
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawAll() {
        this.obstacles.forEach((o)=> {
            o.draw();
        });
        this.draw();
    }
}