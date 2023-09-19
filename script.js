// script.js

// Sample product data (you can replace this with real data from a database)
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 7.49 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCartButton = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");

// Event listeners
cartButton.addEventListener("click", toggleCartModal);
closeCartButton.addEventListener("click", toggleCartModal);
productList.addEventListener("click", addToCart);

// Initial setup: Generate product list
generateProductList();

function generateProductList() {
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function toggleCartModal() {
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

function addToCart(event) {
    if (event.target.tagName === "BUTTON") {
        const productId = parseInt(event.target.getAttribute("data-id"));
        const product = products.find(p => p.id === productId);

        if (product) {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `${product.name} - $${product.price.toFixed(2)}`;
            cartItemsList.appendChild(cartItem);

            // Calculate and update cart total
            const cartItems = cartItemsList.querySelectorAll("li");
            let total = 0;
            cartItems.forEach(item => {
                const price = parseFloat(item.textContent.match(/\d+\.\d+/)[0]);
                total += price;
            });
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
    }
}