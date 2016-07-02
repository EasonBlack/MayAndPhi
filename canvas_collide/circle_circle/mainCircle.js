let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class mainCircle extends Circle {
    constructor(obj) {
        super(obj);
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
            let dx = this.x - o.x;
            let dy = this.y - o.y;
            let dist = dx * dx + dy * dy;
            let ar = this.r  + o.r;
            if(dist < ar*ar){
                this.color = '#ff7373';
                o.color = '#00cc00';
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