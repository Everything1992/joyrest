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

/***/ "./components/cart/checkout.js":
/*!*************************************!*\
  !*** ./components/cart/checkout.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const checkoutButton = document.getElementById('checkout-btn');\r\n    const cartItemsContainer = document.getElementById('cart-items');\r\n    const cartTotalElement = document.getElementById('cart-total');\r\n\r\n    // Function to update the cart display\r\n    function updateCartDisplay() {\r\n        const cart = JSON.parse(localStorage.getItem('cart')) || [];\r\n        cartItemsContainer.innerHTML = '';\r\n        let total = 0;\r\n\r\n        cart.forEach(item => {\r\n            const itemElement = document.createElement('div');\r\n            itemElement.className = 'menu-item';\r\n            itemElement.innerHTML = `\r\n                <img src=\"${item.image}\" alt=\"${item.name}\" />\r\n                <h3>${item.name}</h3>\r\n                <p class=\"price\">$${item.price} x ${item.quantity}</p>\r\n            `;\r\n            cartItemsContainer.appendChild(itemElement);\r\n            total += item.price * item.quantity;\r\n        });\r\n\r\n        cartTotalElement.textContent = total.toFixed(2);\r\n    }\r\n\r\n\r\n\r\n\r\n    // Checkout button functionality\r\n    if (checkoutButton) {\r\n        checkoutButton.addEventListener('click', async (event) => {\r\n            event.preventDefault(); // Prevent default link behavior\r\n\r\n            const cart = JSON.parse(localStorage.getItem('cart')) || [];\r\n\r\n            if (cart.length === 0) {\r\n                alert('Your cart is empty!');\r\n                return;\r\n            }\r\n\r\n            const lineItems = cart.map(item => ({\r\n                price_data: {\r\n                    currency: 'usd',\r\n                    product_data: {\r\n                        name: item.name,\r\n                        images: [item.image.startsWith('http') ? item.image : `http://127.0.0.1:5500/${item.image}`],\r\n                    },\r\n                    unit_amount: Math.round(item.price * 100),\r\n                },\r\n                quantity: item.quantity,\r\n            }));\r\n\r\n            try {\r\n                const response = await fetch('/create-checkout-session', {\r\n                    method: 'POST',\r\n                    headers: { 'Content-Type': 'application/json' },\r\n                    body: JSON.stringify({ lineItems }),\r\n                });\r\n\r\n                if (!response.ok) {\r\n                    const errorDetails = await response.text();\r\n                    console.error('Server error:', errorDetails);\r\n                    throw new Error(`Failed to create checkout session: ${response.statusText}`);\r\n                }\r\n\r\n                const result = await response.json();\r\n                const sessionId = result.sessionId;\r\n\r\n                const { error } = await Stripe(\"pk_test_51QwJ6hPFWiBG1XH0nHQzD1lnNupKeKom3lFg2UTNOYCFofPsQVV5lwyW310nGJXulVUZ6CX6ldYSoTrySV3fFlPg00ucgBOcyWA\").redirectToCheckout({ sessionId });\r\n\r\n                if (error) {\r\n                    console.error('Stripe Checkout error:', error);\r\n                    alert(error.message);\r\n                }\r\n            } catch (error) {\r\n                console.error('Fetch error:', error);\r\n                alert(error.message || 'An unexpected error occurred.');\r\n            }\r\n        });\r\n    }\r\n\r\n    // Initialize cart display\r\n    updateCartDisplay();\r\n});\n\n//# sourceURL=webpack://joyrest/./components/cart/checkout.js?");

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
/******/ 	__webpack_modules__["./components/cart/checkout.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;