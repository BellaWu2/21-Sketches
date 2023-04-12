function setup() {
    createCanvas(1000, 1000)

    textSize(220)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
    colorMode(HSB)
}

function draw() {
    background(0, 0, 0);

    let len = map(mouseX, 0, width, 10, 150)
    for (let i = 0; i < len; i++) {
        push()
        fill(color(i * 2, 80, 100))
        translate(100 + i * 6, mouseY + i)
        rotate(55)
        text('H', 0, 0)
        pop()
    }
}