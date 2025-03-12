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

/***/ "./components/navBar/navBar.js":
/*!*************************************!*\
  !*** ./components/navBar/navBar.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction createNavbar() {\r\n    const navbarHTML = `\r\n        <header class=\"navbar\">\r\n            <nav>\r\n                <a href=\"index.html\" class=\"logo\">Joy</a>\r\n                <button class=\"menu-toggle\" aria-label=\"Toggle menu\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                </button>\r\n                <ul class=\"nav-links\">\r\n                <li><a href=\"index.html\">Home</a></li>\r\n\r\n                    <li><a href=\"menu.html\">Menu</a></li>\r\n                    <li><a href=\"index.html#about\">About</a></li>\r\n                    <li><a href=\"index.html#location\">Location</a></li>\r\n                 </ul>\r\n            </nav>\r\n        </header>\r\n        <div id=\"cart-icon\">\r\n            <i class=\"fas fa-shopping-cart\"></i>\r\n            <span id=\"cart-count\">0</span>\r\n        </div>\r\n    `;\r\n\r\n    document.body.insertAdjacentHTML(\"afterbegin\", navbarHTML);\r\n\r\n    // Existing functionality for the menu toggle\r\n    const menuToggle = document.querySelector(\".menu-toggle\");\r\n    const navLinks = document.querySelector(\".nav-links\");\r\n\r\n    if (menuToggle && navLinks) {\r\n        menuToggle.addEventListener(\"click\", () => {\r\n            navLinks.classList.toggle(\"active\");\r\n            menuToggle.classList.toggle(\"active\");\r\n        });\r\n    }\r\n\r\n    window.addEventListener(\"scroll\", () => {\r\n        const navbar = document.querySelector(\".navbar\");\r\n        if (navbar) {\r\n            navbar.classList.toggle(\"scrolled\", window.scrollY > 50);\r\n        }\r\n    });\r\n\r\n    // Cart icon functionality\r\n    const cartIcon = document.getElementById('cart-icon');\r\n    const cartSection = document.getElementById('cart-section');\r\n\r\n    if (cartIcon && cartSection) {\r\n        cartIcon.addEventListener('click', () => {\r\n            cartSection.classList.toggle('active');\r\n        });\r\n    }\r\n    updateCartCount();\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", createNavbar);\r\n\n\n//# sourceURL=webpack://joyrest/./components/navBar/navBar.js?");

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
/******/ 	__webpack_modules__["./components/navBar/navBar.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;