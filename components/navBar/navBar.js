import { initializeCart } from '../cart/cart.js';

function createNavbar() {
    const navbarHTML = `
        <header class="navbar">
            <nav>
                <a href="/" class="logo">Joy</a>
                <button class="menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-links">
                <li><a href="/">Home</a></li>
                 <li><a href="menu.html">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#location">Location</a></li>
                 </ul>
                 
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const cartIconHTML = `
        <div class="cart-icon-container" style="position: fixed; bottom: 20px; right: 20px;">
            <button class="cart-button" aria-label="View shopping cart">
                <i class="fa fa-shopping-cart"></i>
                <span class="cart-badge">0</span>
            </button>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", cartIconHTML);

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const cartButton = document.querySelector(".cart-icon-container");

    // Initialize cart functionality and get addToCart function
    const cart = initializeCart(cartButton);
    const addToCartFn = cart.addToCart;


    // Event listeners for "Add to Cart" buttons - more specific selector
    const addToCartButtons = document.querySelectorAll(".menu-item .add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const menuItem = button.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = parseFloat(menuItem.querySelector('.price').textContent.replace('$', ''));
            addToCartFn(itemName, itemPrice); // Use the imported addToCart function
        });
    });


    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });



}


document.addEventListener("DOMContentLoaded", createNavbar);
