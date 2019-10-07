function closeCart() {
  let cart = document.getElementById('cart-visible')
  if(!cart) return
  cart.id = 'cart-invisible'
}

function openCart() {
  let cart = document.getElementById('cart-invisible')
  if(!cart) return
  cart.id = 'cart-visible'
}
