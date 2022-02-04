/* Functionallity to toggle the mobile menu */
const primaryHeader = document.querySelector('.js-primary-header');
const menuToggle = document.querySelector('.js-mobile-menu-toggle');
const menuBackdrop = document.querySelector('.js-mobile-menu-backdrop');

menuToggle.addEventListener('click', () => {
    /* CSS rules show or hide the menu depending on if the below class is present */
    primaryHeader.classList.toggle('show-mobile-menu');
});
/* Also close menu when clicking outside */
menuBackdrop.addEventListener('click', () => {
    primaryHeader.classList.remove('show-mobile-menu');
});