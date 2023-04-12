let hover_text = document.querySelector('.hover-text');
let hover_img = document.querySelector('.hover-img');

function showHoverCon(e) {
    let x = e.clientX;
    let y = e.clientY;

    hover_img.style.transform = `translate(${x}px,${y}px)`;

    hover_text.style.setProperty('--x', x + 'px');
    hover_text.style.setProperty('--y', y + 'px');
}

document.addEventListener('mousemove', showHoverCon);