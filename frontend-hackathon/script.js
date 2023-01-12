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


function myFunction(){ // fungsi live filter
  let test = document.getElementsByClassName("box-container")
  let container = test[0].children

  let filter = document.getElementById("search-box").value.toUpperCase()
  console.log(filter)
  // let arrItem = container.getElementsByClassName("box")
  // console.log(container[0])

  for (let i = 0; i < container.length; i++) {
    const itemList = container[i].getElementsByTagName("h3")

    // console.log(itemList[0].innerHTML)
    let itemName = itemList[0].innerHTML
    if (itemName.toUpperCase().indexOf(filter) > -1) {
      container[i].style.display = ""
    } else {
      container[i].style.display = "none"
    }

  }
} 
