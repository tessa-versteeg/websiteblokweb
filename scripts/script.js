/*eslint-env browser*/

// Hamburger menu:
var hamburgerButton = document.querySelector('nav button');
var subMenu = document.querySelector('nav ul');

function toggleMenu() {
    subMenu.classList.toggle('is-open');
}

hamburgerButton.addEventListener('click', toggleMenu);




//Popup JS:
var open = document.getElementById('open');
var popup_container = document.getElementById('popup_container');
var close = document.getElementById('close');
var overlay = document.getElementById('overlay');

open.addEventListener('click', function () {
    popup_container.classList.add('show');
    overlay.classList.add('active');
});

close.addEventListener('click', function () {
    popup_container.classList.remove('show');
    overlay.classList.remove('active');
});
