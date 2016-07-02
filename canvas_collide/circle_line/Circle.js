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

    addObstacle(line) {
        this.obstacles.push(line);
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

            if (this.isPointInCircl(o.x1, o.y1) || this.isPointInCircl(o.x2, o.y2)) {
                this.color = '#ff7373';
                return false;
            }

            if(o.isTouched(this.x,this.y, this.r)){
                this.color = '#ff7373';
            }

        });
    }

    isPointInCircl(x, y) {
        let dist = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
        if (dist <= this.r) {
            return true;
        } else {
            return false;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.beginPath()
        this.ctx.fillStyle = 'red';
        this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        this.ctx.fill();

    }

    drawAll() {
        this.obstacles.forEach((o)=> {
            o.draw();
        });
        this.draw();
    }
}