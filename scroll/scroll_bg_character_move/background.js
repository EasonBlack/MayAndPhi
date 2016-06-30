class BackGround {
    constructor(obj) {
        this.image = obj.image;
        this.v = obj.v;
        this.ctx = obj.ctx;
        this.x = 0;
        this.character = null;
        this.bgh = this.ctx.canvas.height;
        this.bgw = this.image.width * this.ctx.canvas.height / this.image.height;
        this.handleKey();
    }

    handleKey() {
        $(window).on('keydown', (e)=> {
            if (e.keyCode == 39) {   //right
                this.setPosition("RIGHT");
            }
            if (e.keyCode == 37) {   //left
                this.setPosition("LEFT");
            }
        });
    }

    setCharacter(ch) {
        this.character = ch;
    }

    setPosition(type) {
        if(this.checkCharacter(type)) {
            this.setXPosition(type);
        }
        this.checkEdge(type);
        this.draw();
    }

    setXPosition(type) {
        if (type == "RIGHT") {
            this.x = this.x - this.v;
        } else if (type == "LEFT") {
            this.x = this.x + this.v;
        }
    }

    checkCharacter(type) {
        if(this.character.originX == this.character.x) {
            return true;
        } else {
            this.character.setPosition(type, this.v);
            return false;
        }
    }

    checkEdge(type) {
        if (this.x <= this.ctx.canvas.width - this.bgw) {
            this.x = this.ctx.canvas.width - this.bgw;
            this.character.setPosition(type, this.v);
        } else if (this.x > 0) {
            this.x = 0;
            this.character.setPosition(type, this.v);
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.drawImage(this.image, this.x, 0, this.bgw, this.bgh);
        this.character.draw();

    }
}