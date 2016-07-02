let VIEW_WIDTH = new WeakMap();
let VIEW_HEIGHT = new WeakMap();

class Circle {
    constructor(obj) {
        this.r = obj.r;
        this.R = obj.R;
        this.v = obj.v;
        this.color = obj.color || '#006699';
        this.setAngle();
    }

    setAngle() {
        // l = a * pi * r / 180
        let _angle = this.v * 180 / (Math.PI * this.R)
        this.pa  = _angle * Math.PI / 180;
    }

}