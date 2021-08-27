const decrementBtn = document.querySelector('.sub-button');
const increamentBtn = document.querySelector('.add-button');
let quantityNumber = document.querySelector('.quantity-number');

let number = 0;

increamentBtn.addEventListener('click', () => {
  number += 1;
  quantityNumber.innerHTML = number;
});

decrementBtn.addEventListener('click', () => {
  number -= 1;
  quantityNumber.innerHTML = number;
});

if (quantityNumber === -number) {
  quantityNumber.innerHTML = 0;
}

// dress-size

const sizes = document.querySelectorAll('.size ul li');

let choosenSize = null;

sizes.forEach((size, idx) => {
  size.setAttribute('value', idx);

  size.addEventListener('click', (e) => {
    if (size.getAttribute('value') == idx) {
      sizes[idx].classList.add('active');
      choosenSize = idx;
    }
    for (let i = 0; i < sizes.length; i++) {
      if (i !== idx) {
        sizes[i].classList.remove('active');
      }
    }
  });
});

// quick-view-pop

const quickViewPop = document.querySelector('.quick-view-pop');
const popBg = quickViewPop.querySelector('.pop-bg');
const popData = quickViewPop.querySelector('.details');
const popClose = quickViewPop.querySelector('.quick-view-close');
const quickViews = document.querySelectorAll('.quick-view');

quickViews.forEach((quickView) => {
  quickView.addEventListener('click', () => {
    quickViewPop.classList.add('show-quick-view');
  });
});

popBg.addEventListener('click', () => {
  quickViewPop.classList.remove('show-quick-view');
});
popClose.addEventListener('click', () => {
  quickViewPop.classList.remove('show-quick-view');
});

// image-magnify
const zooms = document.querySelectorAll('#zoom');

zooms.forEach((zoom) => {
  $(zoom).zoom({ on: 'click' });
});

// cart-dropdown

const cart = document.querySelector('.cart');
const shoppingCartDropdown = document.querySelector('.shopping-cart-dropdown');

cart.addEventListener('click', () => {
  shoppingCartDropdown.classList.toggle('show-cart-dropdown');
});
