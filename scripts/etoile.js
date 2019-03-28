class Etoile {
    constructor() {
        var rand = Math.random() * (-Math.PI);

        this.x = ((canvas.width / 2) * Math.cos(rand)) + (canvas.width / 2);
        this.y = ((canvas.width / 2) * Math.sin(rand)) + (canvas.height / 2);

        this.vitesseX = (canvas.width*3 / 4 - this.x);
        this.vitesseY = (canvas.height / 4 - this.y);
        var len = Math.sqrt(this.vitesseX * this.vitesseX + this.vitesseY * this.vitesseY);
        this.vitesseX *= 6 / len;
        this.vitesseY *= 6 / len;
    }

    draw(ctx) {
        ctx.save();

        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, 3, 3);

        ctx.restore();
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}