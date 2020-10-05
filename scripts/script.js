// JavaScript Document

var hamburgerButton = document.querySelector('nav button');

var subMenu = document.querySelector('nav ul');


function toggleMenu() {
    subMenu.classList.toggle('is-open');
}


hamburgerButton.addEventListener('click', toggleMenu);
