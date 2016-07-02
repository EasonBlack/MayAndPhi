class Line {
    constructor(obj) {
        this.x1 = obj.x1;
        this.x2 = obj.x2;
        this.y1 = obj.y1;
        this.y2 = obj.y2;
        this.ctx = obj.ctx;
    }

    getLength() {
        let _d = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        return _d;
    }

    isTouched(px, py, r) {
        let angle = this.getAngle(px, py);
        let pto1 = Math.sqrt(Math.pow(px - this.x1, 2) + Math.pow(py - this.y1, 2));
        let pto2 = Math.sqrt(Math.pow(px - this.x2, 2) + Math.pow(py - this.y2, 2));
        let length = Math.sqrt(Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2));
        let dist = Math.abs(Math.sin(angle) * pto1);
        if (dist <= r) {
            let _l1 = Math.sqrt(pto1*pto1 - dist*dist);
            let _l2 = Math.sqrt(pto2*pto2 - dist*dist);
            if (Math.floor(_l1 + _l2) <= Math.floor(length)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    getAngle(px, py) {
        let a1 = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
        let a2 = Math.atan2(py - this.y1, px - this.x1);
        return a1 - a2
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x1, this.y1);
        this.ctx.lineTo(this.x2, this.y2);
        this.ctx.stroke();
    }
}