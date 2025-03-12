function createNavbar() {
    const navbarHTML = `
        <header class="navbar">
            <nav>
                <a href="index.html" class="logo">Joy</a>
                <button class="menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-links">
                <li><a href="index.html">Home</a></li>

                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#location">Location</a></li>
                 </ul>
            </nav>
        </header>
        <div id="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <span id="cart-count">0</span>
        </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    // Existing functionality for the menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

    // Cart icon functionality
    const cartIcon = document.getElementById('cart-icon');
    const cartSection = document.getElementById('cart-section');

    if (cartIcon && cartSection) {
        cartIcon.addEventListener('click', () => {
            cartSection.classList.toggle('active');
        });
    }
    updateCartCount();
}

document.addEventListener("DOMContentLoaded", createNavbar);
