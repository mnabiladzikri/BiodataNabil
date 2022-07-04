const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const items = document.querySelectorAll('.navItem a');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})
