class Group {
    constructor(obj) {
        this.bgs = [];
        this.ctx = obj.ctx;
        this.v = obj.v;
    }

    setBackground(bg) {
        this.bgs.push(bg);
    }

    setSpeed() {
        let _standard = this.bgs.find((b)=> b.standard == true);
        let _standardWidth = _standard.image.width * this.ctx.canvas.height / _standard.image.height;
        this.bgs.forEach((b)=>{
           if(b.standard == true) {
               b.v = this.v;
           } else {
               let _currentWidth = b.image.width * this.ctx.canvas.height / b.image.height;
               b.v = ((_currentWidth -  this.ctx.canvas.width) * this.v) /(_standardWidth - this.ctx.canvas.width);
           }
        })
    }

    auto() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.bgs.forEach((b)=>{
            b.auto();
        })
    }
}