export let cart=JSON.parse(localStorage.getItem('cart')) || [
    // {id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", quantity:2},{id: "15b6fc6f-327a-4ec4-896f-486349e85a3d", quantity:2}
];

export function handlerAddToCart(button){
  let timeoutID;
  return function addToCart(){
    const ID = button.dataset.productId;
    
    const selectorQuantity=document.querySelector(`.js-quantity-selector-${ID}`);
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
    localStorage.setItem('cart',JSON.stringify(cart));
    cartQuantity();  
};
}

export function cartQuantity(){
  let total = 0;

  cart.forEach(cartItem => {
  total += cartItem.quantity;
  });
  document.querySelector('.cart-quantity').innerHTML=total;
}

export function removeFromCart(button){
        const deleteID = button.dataset.productId;
        document.querySelector(`.cart-item-container-${deleteID}`).remove();   
        const index = cart.findIndex(item => item.id === deleteID);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart',JSON.stringify(cart));
     
    
}