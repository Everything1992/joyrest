/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/cart/cart.js":
/*!*********************************!*\
  !*** ./components/cart/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction createCart() {\r\n    // Create a more modern cart HTML structure with better styling\r\n    const cartHTML = `\r\n        <section id=\"cart-section\" class=\"cart-section\">\r\n            <div class=\"cart-overlay\"></div>\r\n            <div class=\"cart-container\">\r\n                <div class=\"cart-header\">\r\n                    <h2>Your Cart</h2>\r\n                    <button id=\"close-cart\" class=\"close-cart\">×</button>\r\n                </div>\r\n                <div class=\"cart-content\">\r\n                    <div id=\"cart-items\" class=\"cart-items\"></div>\r\n                    <div id=\"cart-empty\" class=\"cart-empty\">\r\n                        <svg width=\"80\" height=\"80\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                            <circle cx=\"8\" cy=\"21\" r=\"1\"></circle>\r\n                            <circle cx=\"19\" cy=\"21\" r=\"1\"></circle>\r\n                            <path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"></path>\r\n                        </svg>\r\n                        <p>Your cart is empty</p>\r\n                        <button id=\"start-shopping\" class=\"start-shopping-btn\">Start Shopping</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cart-footer\">\r\n                    <div class=\"total-price\">\r\n                        <span>Total</span>\r\n                        <strong>$<span id=\"cart-total\">0.00</span></strong>\r\n                    </div>\r\n                    <button id=\"checkout-btn\" class=\"checkout-btn\">\r\n                        <span>Checkout</span>\r\n                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                            <path d=\"M5 12h14M12 5l7 7-7 7\"></path>\r\n                        </svg>\r\n                    </button>\r\n                    <button id=\"clear-cart-btn\" class=\"clear-cart-btn\">Clear Cart</button>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    `;\r\n\r\n    // Add CSS styles for the modern cart\r\n    const cartStyles = `\r\n       \r\n    `;\r\n\r\n    // Add the styles to the document\r\n    const styleElement = document.createElement('style');\r\n    styleElement.textContent = cartStyles;\r\n    document.head.appendChild(styleElement);\r\n\r\n    // Add the cart HTML to the document\r\n    document.body.insertAdjacentHTML(\"beforeend\", cartHTML);\r\n\r\n    // Load cart data from localStorage\r\n    let cart = JSON.parse(localStorage.getItem('cart')) || [];\r\n\r\n    // Function to update the cart display\r\n    function updateCartDisplay() {\r\n        const cartItemsDiv = document.getElementById('cart-items');\r\n        const cartTotal = document.getElementById('cart-total');\r\n        const cartEmptyDiv = document.getElementById('cart-empty');\r\n\r\n        cartItemsDiv.innerHTML = \"\"; // Clear existing items\r\n\r\n        let total = 0;\r\n\r\n        // Show/hide empty cart message\r\n        if (cart.length === 0) {\r\n            cartEmptyDiv.style.display = 'flex';\r\n            cartItemsDiv.style.display = 'none';\r\n        } else {\r\n            cartEmptyDiv.style.display = 'none';\r\n            cartItemsDiv.style.display = 'block'; // Changed from flex to block\r\n\r\n            cart.forEach((item, index) => {\r\n                total += item.price * item.quantity;\r\n\r\n                const itemDiv = document.createElement('div');\r\n                itemDiv.classList.add('cart-item');\r\n                itemDiv.dataset.index = index;\r\n\r\n                // Use a placeholder image if the item doesn't have one\r\n                const imageSrc = item.image || '/placeholder.svg?height=70&width=70';\r\n\r\n                // For mobile, we'll adjust the layout\r\n                const isMobile = window.innerWidth <= 480;\r\n\r\n                if (isMobile) {\r\n                    itemDiv.innerHTML = `\r\n                        <img src=\"${imageSrc}\" alt=\"${item.name}\" class=\"cart-item-image\" />\r\n                        <div class=\"cart-item-details\">\r\n                            <h3 class=\"cart-item-name\">${item.name}</h3>\r\n                            <p class=\"cart-item-price\">$${item.price.toFixed(2)}</p>\r\n                            <div class=\"cart-item-controls\">\r\n                                <button class=\"quantity-btn decrease-quantity\" data-index=\"${index}\">-</button>\r\n                                <span class=\"cart-item-quantity\">${item.quantity}</span>\r\n                                <button class=\"quantity-btn increase-quantity\" data-index=\"${index}\">+</button>\r\n                                <button class=\"remove-item\" data-index=\"${index}\">Remove</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cart-item-total\">\r\n                            $${(item.price * item.quantity).toFixed(2)}\r\n                        </div>\r\n                    `;\r\n                } else {\r\n                    itemDiv.innerHTML = `\r\n                        <img src=\"${imageSrc}\" alt=\"${item.name}\" class=\"cart-item-image\" />\r\n                        <div class=\"cart-item-details\">\r\n                            <h3 class=\"cart-item-name\">${item.name}</h3>\r\n                            <p class=\"cart-item-price\">$${item.price.toFixed(2)}</p>\r\n                            <div class=\"cart-item-controls\">\r\n                                <button class=\"quantity-btn decrease-quantity\" data-index=\"${index}\">-</button>\r\n                                <span class=\"cart-item-quantity\">${item.quantity}</span>\r\n                                <button class=\"quantity-btn increase-quantity\" data-index=\"${index}\">+</button>\r\n                                <button class=\"remove-item\" data-index=\"${index}\">Remove</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cart-item-total\">\r\n                            $${(item.price * item.quantity).toFixed(2)}\r\n                        </div>\r\n                    `;\r\n                }\r\n\r\n                // Add with animation\r\n                itemDiv.style.opacity = '0';\r\n                itemDiv.style.transform = 'translateY(10px)';\r\n                cartItemsDiv.appendChild(itemDiv);\r\n\r\n                // Trigger animation\r\n                setTimeout(() => {\r\n                    itemDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';\r\n                    itemDiv.style.opacity = '1';\r\n                    itemDiv.style.transform = 'translateY(0)';\r\n                }, 50 * index); // Stagger the animations\r\n            });\r\n        }\r\n\r\n        if (cartTotal) {\r\n            // Animate the total if it changes\r\n            const currentTotal = parseFloat(cartTotal.textContent);\r\n            if (currentTotal !== total) {\r\n                cartTotal.style.transition = 'color 0.3s ease';\r\n                cartTotal.style.color = '#4a6cf7';\r\n                cartTotal.textContent = total.toFixed(2);\r\n\r\n                setTimeout(() => {\r\n                    cartTotal.style.color = '';\r\n                }, 500);\r\n            } else {\r\n                cartTotal.textContent = total.toFixed(2);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Function to update the cart count in the icon\r\n    window.updateCartCount = function () {\r\n        const cartCount = document.getElementById('cart-count');\r\n        const cart = JSON.parse(localStorage.getItem('cart')) || [];\r\n        if (cartCount) {\r\n            const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);\r\n            cartCount.textContent = totalQuantity;\r\n\r\n            // Add a little animation to the cart count when updated\r\n            cartCount.classList.add('cart-count-update');\r\n            setTimeout(() => {\r\n                cartCount.classList.remove('cart-count-update');\r\n            }, 300);\r\n        }\r\n    }\r\n    // Add an item to the cart\r\n    window.addToCart = function (itemName, itemPrice, itemImage) {\r\n        let itemIndex = cart.findIndex(item => item.name === itemName);\r\n\r\n        if (itemIndex === -1) {\r\n            cart.push({\r\n                name: itemName,\r\n                price: itemPrice,\r\n                image: itemImage,\r\n                quantity: 1\r\n            });\r\n\r\n            // Show a toast notification\r\n            showToast(`${itemName} added to cart`);\r\n        } else {\r\n            cart[itemIndex].quantity += 1;\r\n            showToast(`${itemName} quantity updated`);\r\n        }\r\n\r\n        // These are already called in addToCart, no need to call them again.\r\n        updateCartDisplay();\r\n        updateCartCount();\r\n        localStorage.setItem('cart', JSON.stringify(cart));\r\n    }\r\n\r\n    // Add a small delay\r\n    setTimeout(() => {\r\n        updateCartDisplay();\r\n        updateCartCount(); // This should update the count!\r\n    }, 0);\r\n\r\n    // Add a custom pizza to the cart\r\n    window.addCustomPizzaToCart = function (basePrice) {\r\n        const crustSelect = document.getElementById('crust');\r\n        const toppingsSelect = document.getElementById('toppings');\r\n\r\n        const selectedCrust = crustSelect.options[crustSelect.selectedIndex].text;\r\n        const selectedToppings = Array.from(toppingsSelect.selectedOptions)\r\n            .map(option => option.text);\r\n\r\n        const itemName = `Custom Pizza (${selectedCrust}, ${selectedToppings.join(', ')})`;\r\n\r\n        // Remove any existing custom pizza and add new one\r\n        let itemIndex = cart.findIndex(item => item.name.startsWith(\"Custom Pizza\"));\r\n        if (itemIndex !== -1) {\r\n            cart.splice(itemIndex, 1);\r\n        }\r\n\r\n        cart.push({\r\n            name: itemName,\r\n            price: basePrice,\r\n            quantity: 1\r\n        });\r\n\r\n        showToast('Custom pizza added to cart');\r\n        updateCartDisplay();\r\n        updateCartCount();\r\n        localStorage.setItem('cart', JSON.stringify(cart));\r\n    }\r\n\r\n    // Function to show toast notification\r\n    function showToast(message) {\r\n        // Check if a toast container already exists\r\n        let toastContainer = document.querySelector('.toast-container');\r\n\r\n        // If not, create one\r\n        if (!toastContainer) {\r\n            toastContainer = document.createElement('div');\r\n            toastContainer.className = 'toast-container';\r\n            document.body.appendChild(toastContainer);\r\n\r\n            // Add styles for the toast\r\n            const toastStyles = `\r\n             \r\n            `;\r\n\r\n            const style = document.createElement('style');\r\n            style.textContent = toastStyles;\r\n            document.head.appendChild(style);\r\n        }\r\n\r\n        // Create the toast\r\n        const toast = document.createElement('div');\r\n        toast.className = 'toast';\r\n        toast.textContent = message;\r\n\r\n        // Add to container\r\n        toastContainer.appendChild(toast);\r\n\r\n        // Remove after 3 seconds\r\n        setTimeout(() => {\r\n            toast.classList.add('hide');\r\n            setTimeout(() => {\r\n                toast.remove();\r\n            }, 300);\r\n        }, 3000);\r\n    }\r\n\r\n    // Handle window resize for responsive layout\r\n    window.addEventListener('resize', function () {\r\n        updateCartDisplay();\r\n    });\r\n\r\n    // Event delegation for cart item controls\r\n    document.addEventListener('click', function (e) {\r\n        // Increase quantity\r\n        if (e.target.classList.contains('increase-quantity')) {\r\n            const index = parseInt(e.target.dataset.index);\r\n            cart[index].quantity += 1;\r\n            updateCartDisplay();\r\n            updateCartCount();\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n        }\r\n\r\n        // Decrease quantity\r\n        if (e.target.classList.contains('decrease-quantity')) {\r\n            const index = parseInt(e.target.dataset.index);\r\n            if (cart[index].quantity > 1) {\r\n                cart[index].quantity -= 1;\r\n            } else {\r\n                // Remove item if quantity would be 0\r\n                cart.splice(index, 1);\r\n            }\r\n            updateCartDisplay();\r\n            updateCartCount();\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n        }\r\n\r\n        // Remove item\r\n        if (e.target.classList.contains('remove-item')) {\r\n            const index = parseInt(e.target.dataset.index);\r\n            const itemDiv = e.target.closest('.cart-item');\r\n\r\n            // Animate removal\r\n            itemDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';\r\n            itemDiv.style.opacity = '0';\r\n            itemDiv.style.transform = 'translateY(10px)';\r\n\r\n            setTimeout(() => {\r\n                cart.splice(index, 1);\r\n                updateCartDisplay();\r\n                updateCartCount();\r\n                localStorage.setItem('cart', JSON.stringify(cart));\r\n            }, 300);\r\n        }\r\n\r\n        // Close cart button\r\n        if (e.target.id === 'close-cart') {\r\n            const cartSection = document.getElementById('cart-section');\r\n            cartSection.classList.remove('active');\r\n        }\r\n\r\n        // Cart overlay click to close\r\n        if (e.target.classList.contains('cart-overlay')) {\r\n            const cartSection = document.getElementById('cart-section');\r\n            cartSection.classList.remove('active');\r\n        }\r\n\r\n        // Start shopping button\r\n        if (e.target.id === 'start-shopping') {\r\n            const cartSection = document.getElementById('cart-section');\r\n            cartSection.classList.remove('active');\r\n        }\r\n\r\n        // Checkout button\r\n        if (e.target.id === 'checkout-btn' || e.target.closest('#checkout-btn')) {\r\n            if (cart.length > 0) {\r\n                alert('Proceeding to checkout...');\r\n                // Here you would redirect to checkout page or show checkout form\r\n            } else {\r\n                showToast('Your cart is empty');\r\n            }\r\n        }\r\n\r\n        // Clear cart button\r\n        if (e.target.id === 'clear-cart-btn') {\r\n            localStorage.removeItem('cart');\r\n            cart = []; // Clear the local cart variable\r\n            updateCartDisplay();\r\n            updateCartCount();\r\n            showToast('Cart cleared!');\r\n        }\r\n    });\r\n\r\n    // Add event listener for the cart icon click to toggle cart visibility\r\n    const cartIcon = document.getElementById('cart-icon');\r\n    if (cartIcon) {\r\n        cartIcon.addEventListener('click', () => {\r\n            const cartSection = document.getElementById('cart-section');\r\n            if (cartSection) {\r\n                cartSection.classList.toggle('active');\r\n            }\r\n        });\r\n    }\r\n\r\n    // Add animation styles for cart count\r\n    const countStyles = `\r\n        #cart-count {\r\n            transition: transform 0.2s ease;\r\n        }\r\n        .cart-count-update {\r\n            transform: scale(1.3);\r\n            color: #4a6cf7;\r\n        }\r\n    `;\r\n    const countStyleElement = document.createElement('style');\r\n    countStyleElement.textContent = countStyles;\r\n    document.head.appendChild(countStyleElement);\r\n\r\n    // Initial display and count update\r\n    updateCartDisplay();\r\n    updateCartCount();\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", createCart);\n\n//# sourceURL=webpack://joyrest/./components/cart/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./components/cart/cart.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;