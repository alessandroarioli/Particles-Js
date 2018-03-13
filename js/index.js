let particles;

function setup() {
    createCanvas(800, 600);
    particles = Array(50).fill().map(p => new Particle());
}

function mousePressed() {
    for(let i of Array(10).keys()) {
        particles.push(new Particle(mouseX, mouseY));
    }
}

function draw() {
    background(0);
    let p = new Particle();
    particles.push(p);

    particles.sort((a, b) => a.col - b.col);
    particles.forEach(p => {
        p.update();
        p.show();
    });

    particles = particles.filter(p => !p.finished());

}