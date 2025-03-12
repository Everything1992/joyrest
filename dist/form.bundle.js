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

/***/ "./components/form/form.js":
/*!*********************************!*\
  !*** ./components/form/form.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const contactFormHTML = `\r\n      <section id=\"contact-form\" class=\"section\">\r\n        <div class=\"section-header\">\r\n          <h2>Contact Us</h2>\r\n          <p>We'd love to hear from you! Send us a message.</p>\r\n        </div>\r\n        <div class=\"form-container\">\r\n          <form id=\"contactForm\" action=\"#\" method=\"POST\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name:</label>\r\n              <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name\" required />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email:</label>\r\n              <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your email\" required />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"subject\">Subject:</label>\r\n              <input type=\"text\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" required />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"message\">Message:</label>\r\n              <textarea id=\"message\" name=\"message\" placeholder=\"Your message\" rows=\"5\" required></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"checkbox\" id=\"gdpr\" name=\"gdpr\" required />\r\n              <label for=\"gdpr\">\r\n                I agree to the\r\n                <a href=\"/privacy-policy\" target=\"_blank\">privacy policy</a>\r\n              </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"button\">Send Message</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </section>\r\n    `;\r\n\r\n  document.getElementById(\"contact-section\").innerHTML = contactFormHTML;\r\n\r\n  document\r\n    .getElementById(\"contactForm\")\r\n    .addEventListener(\"submit\", function (event) {\r\n      const name = document.getElementById(\"name\").value.trim();\r\n      const email = document.getElementById(\"email\").value.trim();\r\n      const subject = document.getElementById(\"subject\").value.trim();\r\n      const message = document.getElementById(\"message\").value.trim();\r\n      const gdpr = document.getElementById(\"gdpr\").checked;\r\n\r\n      if (!name || !email || !subject || !message || !gdpr) {\r\n        alert(\"Please fill out all fields and agree to the privacy policy.\");\r\n        event.preventDefault();\r\n      } else if (!validateEmail(email)) {\r\n        alert(\"Please enter a valid email address.\");\r\n        event.preventDefault();\r\n      }\r\n    });\r\n});\r\n\r\n// validation function\r\nfunction validateEmail(email) {\r\n  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n  return regex.test(email);\r\n}\r\n\r\nconst contactFormCSS = `\r\n  /* Contact Form Styles */\r\n  #contact-form {\r\n      background-color: #f9f9f9;\r\n   }\r\n\r\n  .form-container {\r\n      max-width: 600px;\r\n      margin: 0 auto;\r\n      padding: 0 20px;\r\n  }\r\n\r\n  .form-group {\r\n      margin-bottom: 20px;\r\n  }\r\n\r\n  .form-group label {\r\n      display: block;\r\n      font-weight: 500;\r\n      margin-bottom: 5px;\r\n      color: #333;\r\n  }\r\n\r\n  .form-group input[type=\"text\"],\r\n  .form-group input[type=\"email\"],\r\n  .form-group textarea {\r\n      width: 100%;\r\n      padding: 10px;\r\n      border: 1px solid #ddd;\r\n      border-radius: 5px;\r\n      font-family: 'Poppins', sans-serif;\r\n      font-size: 1em;\r\n      transition: border-color 0.3s ease;\r\n  }\r\n\r\n  .form-group input[type=\"text\"]:focus,\r\n  .form-group input[type=\"email\"]:focus,\r\n  .form-group textarea:focus {\r\n      border-color: #d4af37;\r\n      outline: none;\r\n  }\r\n\r\n  .form-group textarea {\r\n      resize: vertical;\r\n  }\r\n\r\n  .form-group input[type=\"checkbox\"] {\r\n      margin-right: 10px;\r\n  }\r\n\r\n  .form-group button {\r\n      background-color: #d4af37;\r\n      color: white;\r\n      border: none;\r\n      padding: 10px 20px;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      font-size: 1em;\r\n      transition: background-color 0.3s ease;\r\n  }\r\n\r\n  .form-group button:hover {\r\n      background-color: #c0941a;\r\n  }\r\n\r\n   \r\n  .form-group a {\r\n      color: #d4af37;\r\n      text-decoration: none;\r\n      transition: color 0.3s ease;\r\n  }\r\n\r\n  .form-group a:hover {\r\n      color: #c0941a;\r\n  }\r\n`;\r\n\r\nconst styleElement = document.createElement(\"style\");\r\nstyleElement.textContent = contactFormCSS;\r\n\r\ndocument.head.appendChild(styleElement);\r\n\n\n//# sourceURL=webpack://joyrest/./components/form/form.js?");

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
/******/ 	__webpack_modules__["./components/form/form.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;