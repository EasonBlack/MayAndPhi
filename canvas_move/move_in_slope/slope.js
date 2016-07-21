

class Slope {
    constructor(obj) {

        this.ctx = obj.ctx;
        this.xStart = obj.xStart;
        this.xEnd = obj.xEnd;
        this.height = obj.height;
        this.yStart = obj.ctx.canvas.clientHeight;
        this.yEnd =  obj.ctx.canvas.clientHeight - this.height;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.moveTo(this.xStart, this.yStart);
        this.ctx.lineTo(this.xEnd, this.yEnd);
        this.ctx.lineTo(this.xEnd, this.yStart);
        this.ctx.stroke();
    }
}