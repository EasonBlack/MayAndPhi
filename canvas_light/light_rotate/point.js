class Point {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.color = obj.color || '#006699';
        this.urgentColor = obj.urgentColor || 'red';
        this.ctx = obj.ctx;
        this.type = '';
    }

    draw(type) {
        this.ctx.beginPath();
        if(this.type == 'URGENT') {
            this.ctx.fillStyle =  this.urgentColor;
        } else {
            this.ctx.fillStyle =  this.color;
        }
        this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}