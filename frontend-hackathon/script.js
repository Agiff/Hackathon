let searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
};

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-button').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
};
