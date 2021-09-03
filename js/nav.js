// cart-dropdown
const cart = document.querySelector('.cart');
const shoppingCartDropdown = document.querySelector('.shopping-cart-dropdown');

cart.addEventListener('click', () => {
  shoppingCartDropdown.classList.toggle('show-cart-dropdown');
});

// brand-dropdown
const brandDropdown = document.querySelector('.drop-brand');
const brandDropdownBtn = document.querySelector('.drop-down-brand');

brandDropdownBtn.addEventListener('click', () => {
  brandDropdown.classList.toggle('active');
});

// drop-down
const dropDown = document.querySelector('.drop-down');
const drop = document.querySelector('.drop');

dropDown.addEventListener('click', () => {
  drop.classList.toggle('active');
});

// loading
$(window).on('load', function () {
  $('.loading').fadeOut('slow');
});

// sticky-nav
let lastScrollTop = 0;

let desktopNav = document.querySelector('.desktop-nav');
window.addEventListener('scroll', () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    desktopNav.style.top = '-150px';
  } else {
    desktopNav.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// side_nav_dropdown
const sideNavDropdown = document.querySelectorAll('.side_nav_dropdown');
const sideNavDrop = document.querySelectorAll('.side_nav_drop');
const rotateArrow = document.querySelectorAll('.rotation');

sideNavDropdown.forEach((sideNavDropBtn, idx) => {
  sideNavDropBtn.addEventListener('click', () => {
    sideNavDrop[idx].classList.toggle('show');
    rotateArrow[idx].classList.toggle('rotate');
  });
});

// side-nav
const sideNav = document.querySelector('.side-nav');
const sideNavBtn = document.querySelector('.side-nav-btn');
const sideNavBg = document.querySelector('.side-nav-bg');

sideNavBtn.addEventListener('click', () => {
  sideNav.classList.toggle('active');
  sideNavBg.classList.toggle('active');
});

sideNavBg.addEventListener('click', () => {
  sideNav.classList.remove('active');
  sideNavBg.classList.remove('active');
});

let mouse = document.querySelector('.cursor-close');

document.addEventListener('mousemove', (e) => {
  let x = e.x;
  let y = e.y;

  mouse.style.top = y + 'px';
  mouse.style.left = x + 'px';
});

// search-popup

const searchPop = document.querySelector('.search-pop');
const searchCloseBtn = document.querySelector('.search-close-btn');
const searchPopBtn = document.querySelector('.search-pop-btn');

searchPopBtn.addEventListener('click', () => {
  searchPop.classList.toggle('active');
});

searchCloseBtn.addEventListener('click', () => {
  searchPop.classList.remove('active');
});
