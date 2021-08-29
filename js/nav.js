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
