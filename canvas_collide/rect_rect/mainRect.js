let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class mainRect extends Rect {
    constructor(obj) {
        super(obj);
        this.obstacles = [];
        this.v = 5;
        VIEW_WIDTH.set(this, this.ctx.canvas.clientWidth);
        VIEW_HEIGHT.set(this, this.ctx.canvas.clientHeight);

        $(document).on('keydown', (e)=> {
            this.setRect(e.keyCode.toString());
        });
    }

    addObstacle(rect) {
        this.obstacles.push(rect);
    }

    setRect(keyCode) {
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
        this.resetRectByXY()
    }

    checkEdge() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y + this.h >= VIEW_HEIGHT.get(this)) {
            this.y = VIEW_HEIGHT.get(this) - this.h;
        }
        if (this.x + this.w >= VIEW_WIDTH.get(this)) {
            this.x = VIEW_WIDTH.get(this) - this.w;
        }
    }

    checkCollide() {
        this.color = this.originColor;
        this.obstacles.forEach((o)=> {
            o.color = o.originColor;
            if ((this.right >= o.left) && (this.left <= o.right)) {
                if ((this.bottom >= o.top) && (this.top <= o.bottom)) {
                    this.color = '#ff7373';
                    o.color = '#00cc00';
                } else {
                }
            } else {
            }
        });
    }

    drawAll() {
        this.obstacles.forEach((o)=> {
            o.draw();
        });
        this.draw();
    }
}
