let font
let angle = 0

function preload() {
    font = loadFont('./imgly_font_intro_inline.otf')
}

function setup() {
    createCanvas(1000, 1000)

    textSize(350)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
    textFont(font)
}

function draw() {
    background(255, 204, 204);
    for (let i = 0; i < 10; i++) {
        push()
        translate(100 + i * 80, 300)
        rotate(angle)
        text('H', 0, 0)
        pop()
    }
}

function mouseClicked() {
    angle += 10
}