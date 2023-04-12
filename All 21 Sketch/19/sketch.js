const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const lrtters = document.querySelectorAll("span");
for(let i = 0; i<lrtters.length; i++){
    lrtters[i].addEventListener('mouseover',function(){
        lrtters[i].classList.add('active')
    })
}