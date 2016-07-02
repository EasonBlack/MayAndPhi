class Point {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.color = obj.color || '#006699';
        this.ctx = obj.ctx;
        this.w = 0;
        this.len = 0;
    }

    draw(type) {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    getLightLen(px, py){
        if(!this.len) {
            this.len = this.getLength(px,py);
        }
        this.w += 5;
        if(this.len < this.w) {
            this.w= this.len;
        }
        return this.w;
    }

    getAngle(px, py) {
        let _px = px + 10;
        let _py = py;
        return Math.atan2( this.y - _py , this.x - px);
        // this.len = this.getLength(px,py);
        // return  Math.acos((this.x-px)/this.len);
    }

    getLength(px, py) {
        return Math.sqrt(Math.pow(this.x - px, 2) + Math.pow(this.y - py, 2));
    }
}