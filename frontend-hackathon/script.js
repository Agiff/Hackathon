let searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
};