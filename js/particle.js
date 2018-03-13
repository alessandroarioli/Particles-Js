class Particle {
    constructor(mouseX, mouseY) {
        this.x = mouseX || width / 2;
        this.y = mouseY || height - 20;
        this.vx = random(-1, 1);
        this.vy = random(-4, 1);
        this.col_alpha = random(256);
        this.col_beta = random(256);
        this.col_gamma = random(256);
        this.alpha = 255;
        this.r = 16;
    }
    
    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 1;
    }

    show() {
        noStroke();
        fill(this.col_alpha, this.col_beta, this.col_gamma, this.alpha);
        ellipse(this.x, this.y, this.r);
    }
};