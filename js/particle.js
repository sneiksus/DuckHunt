class Particle {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }
    draw() {
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 
                0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
    }
    update() {
        this.draw();
        this.x += this.dx;
        this.y += this.dy;
    }
}