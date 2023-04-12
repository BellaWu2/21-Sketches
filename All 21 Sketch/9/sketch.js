function setup() {
    createCanvas(1000, 1000)

    textSize(100)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
    colorMode(HSB)
}

function draw() {
    background(0, 0, 0);

    let xoff = mouseX / 100
    for (let i = 0; i < 130; i++) {
        xoff = xoff + 0.01;

        fill(color(map(mouseY, 0, height, 0, 360), 80, 80))

        push()
        translate(100 + i * 6, 200 + noise(xoff) * 400)
        rotate(55)
        text('H', 0, 0)
        pop()
    }
}