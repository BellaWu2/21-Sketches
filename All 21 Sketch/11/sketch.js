let boxSize = 10
let yoff = -140

function setup() {
    createCanvas(1000, 1000, WEBGL)
    angleMode(DEGREES)
    noStroke()
    colorMode(HSB)
}

function draw() {
    background(0, 20, 100);

    rotateX(mouseY)
    rotateY(mouseX)

    for (let i = 0; i < 30; i++) {
        fill(color(i * 2, 80, 100))
        push()
        translate(0, yoff + i * boxSize - 15 * boxSize, 0)
        box(boxSize);
        pop()
    }
    for (let i = 0; i < 30; i++) {
        fill(color(200 + i * 2, 80, 100))
        push()
        translate(100, yoff + i * boxSize - 15 * boxSize, 0)
        box(boxSize);
        pop()
    }
    for (let i = 1; i < 10; i++) {
        fill(color(100 + i * 2, 80, 100))
        push()
        translate(i * boxSize, yoff, 0)
        box(boxSize);
        pop()
    }
}