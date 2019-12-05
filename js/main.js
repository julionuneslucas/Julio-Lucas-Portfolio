// The Menu when it´s open come from the right side 

const MENUBTN = document.querySelector('.menu-btn');
const HAMBURGER = document.querySelector('.menu-btn_burger');
const NAV = document.querySelector('.nav');
const MENUNAV = document.querySelector('.menu-nav');
const NAVITEMS = document.querySelectorAll('.menu-nav_item'); //Get a array of elements

let showMenu = false;

MENUBTN.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        HAMBURGER.classList.add('open');
        NAV.classList.add('open');
        MENUNAV.classList.add('open');
        NAVITEMS.forEach(item => item.classList.add('open')); // forEach() method calls a function once for each element in an array, in order. | "=>" Arrow functions allow us to write shorter function syntax

        showMenu = true;
    } else {
        HAMBURGER.classList.remove('open');
        NAV.classList.remove('open');
        MENUNAV.classList.remove('open');
        NAVITEMS.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}