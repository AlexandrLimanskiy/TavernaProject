const burgerMenu = document.querySelector('.header__nav__list__burder_menu');
const burgerMenuList = document.querySelectorAll('.header__nav__list__ul__burger');

burgerMenu.addEventListener('click', () => {
    burgerMenuList.forEach(item => {
        item.classList.toggle('active');
    })
})