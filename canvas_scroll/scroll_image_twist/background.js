class Background {
    constructor(obj) {
        this.ctx = obj.ctx;
        this.image = obj.image;
        this.h = this.image.height;
        this.w = this.image.width;
        this.realW = 200;
        this.realH = this.h * (this.realW / this.w);
        this.skew = 0;
        this.scale = 0;
        this.v = 0.05;
        this.realPortion = 3;
        this.portion = this.realPortion * (this.w / this.realW);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        let count = Math.floor(this.realH / 3);
        let _skew = 0;
        for (let i = 0; i < this.realH / 3; i++) {
            this.ctx.setTransform(1, 0, _skew, 1, 0, 0);
            this.ctx.drawImage(this.image,
                0, i * this.portion, this.w, this.portion,
                230, i * 3, this.realW, 3);
            _skew =  Math.cos((i + this.skew) * 2 * Math.PI / count);// -1* this.skew * i / this.realH;
        }
        this.skew += 0.3;
        if (this.skew >= count) {
            this.skew = 0;
        }
    }
}