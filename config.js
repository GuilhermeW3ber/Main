const menu = document.querySelector('#mobile-menu');
const menuPages = document.querySelector('.navbarMenu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuPages.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);