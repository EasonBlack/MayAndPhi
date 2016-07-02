class Light {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;
        this.ctx = obj.ctx;
        this.color = obj.color || '#006600';
        this.points = [];
        this.v = 5;
        this.a = 0;

        $(document).on('keydown', (e)=> {
            this.setLight(e.keyCode.toString());
        });
    }

    addPoint(point) {
        this.points.push(point);
    }

    setLight(keyCode) {
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
            case '32': //space
                this.a += 5;
                break;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.a * Math.PI / 180);
        this.ctx.shadowBlur = 50;
        this.ctx.shadowColor = "rgba(0, 0, 0 ,1)";
        this.ctx.fillStyle = this.color;
        this.ctx.rect(0, 0, this.w, this.h);
        this.ctx.fillRect(0, 0, this.w, this.h);

        this.ctx.restore();

        this.points.forEach((p)=> {
            let type = "";
            if (this.ctx.isPointInPath(p.x, p.y)) {
                p.type = "URGENT";
            } else {
                p.type = "";
            }
        });
        this.points.forEach((p)=> {
            p.draw();
        });
    }

    drawAll() {
        this.draw();
    }

}