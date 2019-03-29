class Etoile {
    constructor() {
        // Position initiale de l'etoile en arc de cercle
        var rand = Math.random() * (-Math.PI);
        this.x = (widthDivBy2 * Math.cos(rand)) + widthDivBy2;
        this.y = (widthDivBy2 * Math.sin(rand)) + heightDivBy2;

        // Definition du vecteur de deplacement
        var targetX = (widthDivBy4 * 3 - this.x);
        var targetY = (heightDivBy4 - this.y);
        var distance = Math.sqrt(targetX * targetX + targetY * targetY);
        this.vitesseX = targetX * 6 / distance;
        this.vitesseY = targetY * 6 / distance;
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