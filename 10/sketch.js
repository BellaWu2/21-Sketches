let xoff = 0
function setup() {
    createCanvas(1000, 1000)
    textSize(220)
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
}

function draw() {
    background(0, 0, 0);

    let xoff = mouseX / 100

    let r = map(mouseY, 0, height, 0, 225)

    for (let i = 0; i < 100; i++) {
        xoff = xoff + 0.01;

        let inter = map(i, 0, 100, 0, 1);
        let c = lerpColor(color(r, r, 0), color(0, r, 0), inter);
        fill(c);

        push()
        translate(100 + i * 6, 100 + noise(xoff) * 500)
        rotate(55)
        text('H', 0, 0)
        pop()
    }
}