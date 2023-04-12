function setup() {
    createCanvas(1000, 1000)
    background(255, 204, 204);

    textSize(500)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)

    push()
    translate(500, 400)
    rotate(45)
    text('H', 0, 0)
    pop()
}