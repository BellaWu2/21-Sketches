document.onmousemove = function(event) {
    var body = document.querySelector("body");
    var letter = document.createElement("span");
    var x = event.offsetX;
    var y = event.offsetY;
    letter.style.left = x + "px";
    letter.style.top = y + "px";
    var size = Math.random() * 100;
    letter.style.width = size + "px";
    letter.style.height = size + "px";
    body.appendChild(letter);

    setTimeout(function() {
        letter.remove();
    }, 2000);
};

