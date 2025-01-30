export const cart = [];

export function addToCart(productId) {
  let matchingItem;

  const selectEl = document.querySelector(`.js-quantity-selector-${productId}`);
  let productQuantity = Number(selectEl.value);

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });


  if(matchingItem) {
    matchingItem.quantity += productQuantity;
  } else {
      cart.push({
        productId,
        quantity:productQuantity
      });
  }
}