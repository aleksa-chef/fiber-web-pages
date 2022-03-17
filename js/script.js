'use strict';

// Hamburger Menu

function openSideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
}

function openOverlay() {
    document.getElementById('overlay').style.cssText = 'opacity: 1; z-index: 1;'
}

function closeOverlay() {
    document.getElementById('overlay').style.cssText = 'opacity: 0; z-index: -1;'
}

// Back To Top Button

const backToTop = document.querySelector(`.back-to-top`);

window.addEventListener(`scroll`, () => {
    if(window.pageYOffset > 100) {
        backToTop.classList.add(`active`);
    } else {
        backToTop.classList.remove(`active`);
    }
})