let font
let angle = 0
let fontColor = 'black'

function preload() {
    font = loadFont('./imgly_font_intro_inline.otf')
}

function setup() {
    createCanvas(1000, 1000)

    textSize(300)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
    textFont(font)
}

function draw() {
    background(255, 204, 204);

    angle += 0.5
    fill(fontColor)
    for (let i = 0; i < 10; i++) {
        push()
        translate(100 + i * 80, 300)
        rotate(angle)
        text('H', 0, 0)
        pop()
    }
}

function mouseClicked() {
    fontColor = color(random(255), random(255), random(255))
}