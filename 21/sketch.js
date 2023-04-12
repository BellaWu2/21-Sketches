const cvs = document.getElementById('cvs')
cvs.width = 1000
cvs.height = 1000
const ctx = cvs.getContext('2d')
const { width, height } = cvs
let colors = []
const bgData = Array.from(new Array(500)).map(v => {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        step: Math.random() * 2.5 + 0.5
    }
})
const sendText = (text, fontSize = ((width * 0.7) / text.length), stepV = 40) => {
    ctx.font = `bold ${500}px Times`
    ctx.fillStyle = '#ff69b4'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, width / 2, height / 2)
    const data = ctx.getImageData(0, 0, width, height).data
    
    let index = 0
    let bl = 4
    let useIndex = 0
    for(let i=0;i<data.length;i+=4) {
        const x = index % width
        const y = Math.ceil(index / width)
        if (x%bl === 0 && y%bl === 0 && data[i] === 255 && data[i+1] === 255 && data[i+2] === 255) {
            const rx = Math.floor(Math.random() * fontSize) + width / 2 - fontSize / 2
            const ry = Math.floor(Math.random() * fontSize) + height / 2 - fontSize / 2
            const item = colors[useIndex]
            if (item) {
                colors[useIndex] = {
                    x,
                    y,
                    rx: item.x,
                    ry: item.y,
                    stepX: Math.abs(item.x - x) / stepV,
                    stepY: Math.abs(item.y - y) / stepV
                }
            } else {
                colors[useIndex] = {
                    x,
                    y,
                    rx,
                    ry,
                    stepX: Math.abs(rx - x) / stepV,
                    stepY: Math.abs(ry - y) / stepV
                }
            }
            useIndex++
        }
        index++
    }
    if (useIndex < colors.length) { 
        colors.splice(useIndex, colors.length - useIndex)
    }
}
const render = () => {
    ctx.beginPath()
    ctx.clearRect(0, 0, width, height)
    colors.forEach(v => {
        if (v.rx > v.x) {
            v.rx-=v.stepX
            if (v.rx < v.x) {
                v.rx = v.x
            }
        } else if (v.rx < v.x) {
            v.rx+=v.stepX
            if (v.rx > v.x) {
                v.rx = v.x
            }
        }
        if (v.ry > v.y) {
            v.ry-=v.stepY
            if (v.ry < v.y) {
                v.ry = v.y
            }
        } else if (v.ry < v.y) {
            v.ry+=v.stepY
            if (v.ry > v.y) {
                v.ry = v.y
            }
        }
        ctx.rect(v.rx, v.ry, 3, 3)
    })
    bgData.forEach(v => {
        v.y = v.y > height ? 0 : (v.y + v.step)
        ctx.rect(v.x, v.y, 2, 2)
    })
    ctx.fill()
    requestAnimationFrame(render)
}
render()
const awaitSendText = async (txt, fontSize, stepV) => {
    return new Promise((resolve) => {
        sendText(txt, fontSize, stepV)
        colors.sort(v => Math.random() - 0.5)
        setTimeout(() => resolve(), 2000 + (stepV > 40 ? 1000 : 0))
    })
}
const run = async () => {
    const text = 'H'.split('，')
    for(let i=0;i<text.length;i++) {
        await awaitSendText(text[i], 150, i === 0 ? 100 : 40)
    }
    run()
}
run()