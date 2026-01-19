function zap(event) {
    event.preventDefault()
 const nome = document.getElementById('nome').value;
 const mensagem = document.getElementById('mensagem').value;
 const telefone = '554598555395';

 const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
 const msgFormatada = encodeURIComponent(texto);

 const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

 window.open(url, '_blank')
}

const toggle = document.querySelector('.menutoggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

let items = document.querySelectorAll('.slider .item');
let active = 1;

function niggablix(){
    let itemActive = items[active]
    
    itemActive.style.transform = `none`;
    itemActive.style.zIndex = 10;
    itemActive.style.filter = 'none';
    itemActive.style.opacity = 1;

    let gap = window.innerWidth < 768 ? 80 : 120;
    
    let stt = 0;
    for (let i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${gap * stt}px) scale(${1 - 0.2 * stt}) perspective(1000px) rotateY(-20deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    
    stt = 0;
    for (let i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-gap * stt}px) scale(${1 - 0.2 * stt}) perspective(1000px) rotateY(20deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

niggablix();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : 0;
   niggablix();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : items.length - 1;
    niggablix();
}

window.screen.orientation.addEventListener("change", () => {
    setTimeout(() => {
        niggablix();
    }, 100);
});

window.addEventListener('resize', niggablix);
window.addEventListener('load', niggablix);