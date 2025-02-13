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

    const styleElement = document.createElement("style");
    styleElement.textContent = navBarCSS;
    document.head.appendChild(styleElement);

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
}

const navBarCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
    }

    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.98);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
    }

    .logo {
        font-size: 1.8rem;
        font-weight: 600;
        color: #333;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .logo:hover {
        color: #d4af37;
    }

    .nav-links {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-links li {
        margin-left: 2rem;
    }

    .nav-links a {
        text-decoration: none;
        color: #333;
        font-weight: 400;
        transition: color 0.3s ease;
        position: relative;
    }

    .nav-links a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #d4af37;
        transition: width 0.3s ease;
    }

    .nav-links a:hover {
        color: #d4af37;
    }

    .nav-links a:hover::after {
        width: 100%;
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    .menu-toggle span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 5px 0;
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }

        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
            clip-path: circle(0% at top right);
            transition: clip-path 0.5s ease-in-out;
        }

        .nav-links.active {
            clip-path: circle(150% at top right);
        }

        .nav-links li {
            margin: 1rem 2rem;
        }

        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;

document.addEventListener("DOMContentLoaded", createNavbar);
