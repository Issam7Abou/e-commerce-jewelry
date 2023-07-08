//html elem in vars
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = cartIcon.querySelector('.cart-dropdown');
const item = document.querySelectorAll('.buy-btn');
const div = document.querySelectorAll('.item');
const cart = document.querySelector('.cart');

// Func that opens the Shopping Cart when clicked
function showCart(event) {
    event.preventDefault();
    cartDropdown.classList.toggle('show');
};

// func to get the info of the product clicked
function getInfo() {
    item.forEach(button => {
        button.addEventListener('click', function() {
          div.forEach(product => {
            if (product.contains(button)) {
                const title = product.querySelector('.item-name');
                const price = product.querySelector('.price')
                addToCart(title, price);
            }
          })
        });
    });
}

// func that adds the product to shoppingCart
function addToCart(title, price) {
    console.log(title.textContent, '||',  price.textContent)
    const divCart = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    divCart.classList.add('item-cart');
    titleElem.textContent = title.textContent;
    priceElem.textContent = price.textContent;
    divCart.appendChild(titleElem);
    divCart.appendChild(priceElem);
    cart.appendChild(divCart)
}

// Event Listeners
cartIcon.addEventListener('click', showCart);

// On Load
getInfo()