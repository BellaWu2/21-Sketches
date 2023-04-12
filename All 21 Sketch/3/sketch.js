function setup() {
    createCanvas(1000, 1000)
    background(255, 204, 204);

    textSize(500)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)

    let x = random(0, 300)
    let y = random(0, 300)
    push()
    translate(300 + x, 300 + y)
    rotate(45)
    text('H', 0, 0)
    pop()
}