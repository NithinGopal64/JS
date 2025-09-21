
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
let totalCartItems1;
export function removeFromCart(button){
        
        const deleteID = button.dataset.productId;
        document.querySelector(`.cart-item-container-${deleteID}`).remove();   
        const index = cart.findIndex(item => item.id === deleteID);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart',JSON.stringify(cart));
        totalCartItems1 = totalCartItems();
        // document.querySelector('.return-to-home-link').innerText= totalCartItems1 + ' items';
        if (totalCartItems1 === 1) document.querySelector('.return-to-home-link').innerText= totalCartItems1 + ' item';
        else{
            document.querySelector('.return-to-home-link').innerText= totalCartItems1 + ' items';
        }
        
        
}

export function totalCartItems(){
  let totalCartItems1=0;
  cart.forEach(item => totalCartItems1++);
  return totalCartItems1;
}


  // Function for update, delete inside checkout page
export function updateCart(button){
    const ProductId = (button.dataset.productId);
    
    const inputQuantity = document.querySelector(`.input-${ProductId}`);
    const saveQuantity = document.querySelector(`.save-${ProductId}`);
    if (saveQuantity.addEventListener('click', () => {
      inputQuantity.classList.remove('quantity-input2'); 
      button.classList.remove('update-quantity2'); 
      saveQuantity.classList.remove('save-quantity-link2'); 
    }));
      
    
    
      inputQuantity.classList.add('quantity-input2') ;
      button.classList.add('update-quantity2');
      saveQuantity.classList.add('save-quantity-link2');
      
    
  
   

}


