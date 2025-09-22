import {cart,removeFromCart,totalCartItems,updateCart} from '../data/cart.js';
import {products} from '../data/products.js';
let html = '';
let matchingProduct;
// cart=JSON.parse(localStorage.getItem('cart'));
cart.forEach((cartItem)=>{
    const productID=cartItem.id;
    products.forEach((prod)=>{
        if (prod.id===productID) 
            matchingProduct = prod;
    });
    html+=  `<div class="cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${matchingProduct.image}>

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  ${(matchingProduct.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label update-quantity-link-${matchingProduct.id}" data-product-id = '${matchingProduct.id}'>${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-cart" data-product-id = '${matchingProduct.id}'>
                    Update
                  </span>
                  <input class='input-${matchingProduct.id} quantity-input'>
                  <span class='save-${matchingProduct.id} save-quantity-link link-primary'>Save</span>
                  <span class="delete-quantity-link link-primary js-delete-quantity" data-product-id = '${matchingProduct.id}'>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
    
});
document.querySelector('.order-summary').innerHTML=html;
if (totalCartItems()===1){
  document.querySelector('.return-to-home-link').innerText= totalCartItems() + ' item';
}
else{

  document.querySelector('.return-to-home-link').innerText= totalCartItems() + ' items';
}

const deleteAction = document.querySelectorAll('.js-delete-quantity');
deleteAction.forEach((button)=>{    
    button.addEventListener('click',()=>{removeFromCart(button)});  
}); 

const updateCartButtons = document.querySelectorAll('.js-update-cart');

updateCartButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
      updateCart(button);
      // let totalItems=totalCartItems();
      // document.querySelector('.return-to-home-link').innerText= totalItems + ' items';
    })

   })

