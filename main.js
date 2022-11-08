const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navBar');
const bag = document.getElementById('mobile');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        nav.classList.remove('mobile');
        bag.style.display= "none";
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        bag.style.display= "block";
    })
}
