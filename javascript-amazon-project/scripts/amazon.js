import {cart} from '../data/cart.js';
import {products} from '../data/products.js';
let html= ``;
products.forEach((product) => {
html+= `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/10).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class=js-quantity-selector-${product.id}>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id}>
            Add to Cart
          </button>
        </div>
`

})

document.querySelector('.products-grid').innerHTML= html;

function cartQuantity(){
  let total = 0;

  cart.forEach(cartItem => {
  total += cartItem.quantity;
  });
  document.querySelector('.cart-quantity').innerHTML=total;
}

function handlerAddToCart(button){
  let timeoutID;
  return function addToCart(){
    const ID = button.dataset.productId;
    
    selectorQuantity=document.querySelector(`.js-quantity-selector-${ID}`);
    let quantityIncrement=Number(selectorQuantity.value);
    const added=document.querySelector(`.js-added-${ID}`);
    added.classList.add('js-added-to-cart');

    if(timeoutID){
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(()=>{
      added.classList.remove('js-added-to-cart')
    },2000);

    
    let exists =0;

    cart.forEach((cartItem)=>{
      if(cartItem.id===ID){
          cartItem.quantity+=quantityIncrement;
          exists=1;
    }
    })
    if (!exists){
      cart.push({id: ID, quantity:quantityIncrement});

    }

    cartQuantity();  
};


}



let selectorQuantity=0;
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
        //let timeoutID;
        button.addEventListener('click', handlerAddToCart(button));  

      
});
