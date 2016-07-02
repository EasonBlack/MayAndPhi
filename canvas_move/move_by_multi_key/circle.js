let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();
class Circle {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.r = obj.r;
        this.v = obj.v;
        this.color = obj.color || '#006699';
        this.ctx = obj.ctx;
        VIEW_WIDTH.set(this, this.ctx.canvas.clientWidth);
        VIEW_HEIGHT.set(this, this.ctx.canvas.clientHeight);
    }

    setCircle(type) {
        let ROOT2 = 1.41421;
        switch (type) {
            case 'VK_LEFT':
                this.x -= this.v;
                break;
            case 'VK_LEFT_UP':
                this.x -= this.v / ROOT2;
                this.y -= this.v / ROOT2;
                break;
            case 'VK_LEFT_DOWN':
                this.x -= this.v / ROOT2;
                this.y += this.v / ROOT2;
                break;
            case 'VK_RIGHT':
                this.x += this.v;
                break;
            case 'VK_RIGHT_UP':
                this.x += this.v / ROOT2;
                this.y -= this.v / ROOT2;
                break;
            case 'VK_RIGHT_DOWN':
                this.x += this.v / ROOT2;
                this.y += this.v / ROOT2;
                break;
            case 'VK_UP':
                this.y -= this.v;
                break;
            case 'VK_DOWN':
                this.y += this.v;
                break;
        }
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