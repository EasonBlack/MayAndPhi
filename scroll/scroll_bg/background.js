class BackGround {
    constructor(obj) {
        this.image = obj.image;
        this.v = obj.v;
        this.ctx = obj.ctx;
        this.x = 0;
        this.bgh = this.ctx.canvas.height;
        this.bgw = this.image.width * this.ctx.canvas.height / this.image.height;
    }

    setXPosition() {
        if (this.x <= this.ctx.canvas.width - this.bgw) {
            this.x = this.ctx.canvas.width - this.bgw;
        } else if (this.x > 0) {
            this.x = 0;
        } else {
            this.x -= this.v;
        }
    }

    auto() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.drawImage(this.image, this.x, 0, this.bgw, this.bgh);
        this.setXPosition();
    }
}