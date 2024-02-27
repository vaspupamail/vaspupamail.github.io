const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-counter'),
      line = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});
