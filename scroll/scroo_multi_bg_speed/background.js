class BackGround {
    constructor(obj) {
        this.image = obj.image;
        this.ctx = obj.ctx;
        this.v = 0;
        this.x = 0;
        this.y = 0;
        this.standard = obj.standard;
        this.position = obj.position;
        this.heightSize = obj.heightSize;
        this.widthSize = obj.widthSize;
    }

    setFullPosition() {
        this.bgh = this.ctx.canvas.height;
        this.bgw = this.image.width * this.ctx.canvas.height / this.image.height;
        if (this.x <= this.ctx.canvas.width - this.bgw) {
            this.x = this.ctx.canvas.width - this.bgw;
        } else if (this.x > 0) {
            this.x = 0;
        } else {
            this.x -= this.v;
        }
        this.y = 0;
    }

    setBottomPosition() {
        this.bgh = this.heightSize;
        this.bgw = this.image.width * this.ctx.canvas.height / this.image.height;
        if (this.x <= this.ctx.canvas.width - this.bgw) {
            this.x = this.ctx.canvas.width - this.bgw;
        } else if (this.x > 0) {
            this.x = 0;
        } else {
            this.x -= this.v;
        }
        this.y = this.ctx.canvas.height - this.bgh;
    }

    setRightCornerPosition() {
        this.bgh = this.heightSize;
        this.bgw = this.widthSize;
        this.x = this.ctx.canvas.width - 50;
        this.y = 10;
    }

    setPosition() {
        switch (this.position) {
            case  'FULL':
                this.setFullPosition()
                break;
            case 'BOTTOM':
                this.setBottomPosition()
                break;
            case 'RIGHT-CORNER':
                this.setRightCornerPosition();
                break;
        }
    }

    auto() {
        this.setPosition();
        this.ctx.drawImage(this.image, this.x, this.y, this.bgw, this.bgh);
    }
}