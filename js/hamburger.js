let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.navigation');


function Hamburger() {
    nav.classList.toggle('show');
    hamburger.classList.toggle('is-active');
}

document.addEventListener('click', e =>{

    if (e.target.matches('.list-item')) {
        document.querySelector('.navigation').classList.remove('show');
        document.querySelector('.hamburger').classList.remove('is-active')
    }
})
