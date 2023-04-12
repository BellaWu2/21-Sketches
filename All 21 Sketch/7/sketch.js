let pic
let angle = 0

function preload() {
    pic = loadImage('pic7.jpeg')
}

function setup() {
    createCanvas(1000, 1000)
    noStroke()
    frameRate(5)
}

function draw() {
    background(0)

    pic.loadPixels()
    let size = map(mouseX, 0, width, 1, 5)

    for (let y = 0; y < pic.height; y += 5) {
        for (let x = 0; x < pic.width; x += 5) {
            const in_color = pic.get(x, y);
            if (in_color[0] > 128) {
                fill(255, in_color[1], mouseY, random(255))
                circle(230 + x, 180 + y, size)
            }
        }
    }

}