let font

function preload() {
    font = loadFont('./imgly_font_intro_inline.otf')
}

function setup() {
    createCanvas(1000, 1000)
    background(255, 204, 204);

    textSize(300)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
    textFont(font)

    let x = random(0, 300)
    let y = random(300, 600)

    for (let i = 0; i < 10; i++) {
        push()
        translate(x + i * 80, y)
        rotate(45)
        text('H', 0, 0)
        pop()
    }
}