var items = {}

function closeCart() {
    let cart = document.getElementById('cart-visible')
    if (!cart) return
    cart.id = 'cart-invisible'
}

function openCart() {
    let cart = document.getElementById('cart-invisible')
    if (!cart) return
    cart.id = 'cart-visible'
}


function makeItem(name, price, imgurl) {
    let item = document.createElement('div')
    let itemName = document.createElement('p')
    let img = document.createElement('img')
    let addToCartButton = document.createElement('button')

    img.src = imgurl
    item.className = "item"
    itemName.innerHTML = `${name}, ${price} $`

    addToCartButton.innerHTML = '🛒'
    addToCartButton.addEventListener('click', function() { addToCart(name, price, imgurl) })

    item.appendChild(img)
    item.appendChild(itemName)
    item.appendChild(addToCartButton)

    return item
}


function makeCartItem(name, price, imgurl) {
    let item = document.createElement('div')
    let itemName = document.createElement('p')
    let img = document.createElement('img')
    let addToCartButton = document.createElement('button')

    img.src = imgurl
    item.className = "item"
    itemName.innerHTML = `${name}, ${price} $`

    addToCartButton.innerHTML = 'X'
    addToCartButton.addEventListener('click', function() { removeFromCart(item) })

    item.appendChild(img)
    item.appendChild(itemName)
    item.appendChild(addToCartButton)

    return item
}

function addToCart(name, price, imgurl) {
    let cartItem = makeCartItem(name, price, imgurl);
    let cart_contents = document.getElementById('contents')
    cart_contents.appendChild(cartItem)
    openCart();
}

function removeFromCart(item) {
    let cart_contents = document.getElementById('contents')
    cart_contents.removeChild(item)
}



function fillProductList() {
    let items = [
        makeItem("a bottle of dirty water", 99, "#"),
        makeItem("Harry Potter Vol 8", 999, "#"),
        makeItem("cat", 5, "#"),
        makeItem("dog", 7, "#")
    ]

    let product_list = document.getElementById('products')

    for (i = 0; i < items.length; i++) {
        product_list.appendChild(items[i])
    }
}