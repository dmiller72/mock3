/////////////menu slider///////////////////

const slide = ()=> {

    const menu = document.getElementById('menu');
    const nav = document.querySelector('nav');

    menu.addEventListener('click', ()=> {
        nav.classList.toggle('show');
    });
}

slide();