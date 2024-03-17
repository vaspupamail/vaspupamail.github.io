
//Menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-link'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});

//pageUp and smoothScroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

//Carousel

$('.reviews__inner').slick({
    slidesToShow: 1,
    Infinity: true,
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev"><img src="./icons/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./icons/next.png"></button>',
});