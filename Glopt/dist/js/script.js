$('.reviews__inner').slick({
    slidesToShow: 1,
    Infinity: true,
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev"><img src="./icons/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./icons/next.png"></button>',
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('header__menu_active');
        })
    })
})