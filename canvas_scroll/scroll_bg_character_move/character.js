class Character {
    constructor(obj) {
        this.image = obj.image;
        this.ctx = obj.ctx;

        this.imageW = 100;
        this.imageH =  this.image.height * (this.imageW / this.image.width);
        this.originX = this.x = obj.ctx.canvas.width / 2 - this.imageW/2;
        this.y = obj.ctx.canvas.height - this.imageH;
    }

    setPosition(type,v) {
        if(type=='RIGHT') {
            this.x = this.x + v;
        } else if (type=="LEFT") {
            this.x = this.x - v;
        }
        this.checkEdge();
    }

    checkEdge() {
        if (this.x >= this.ctx.canvas.width - this.imageW) {
            this.x = this.ctx.canvas.width - this.imageW;
        } else if (this.x < 0) {
            this.x = 0;
        }
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.imageW, this.imageH);
    }
}