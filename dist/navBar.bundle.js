var navBarBundle;
(() => {
  "use strict";
  var n = {};
  ((n) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(n, "__esModule", { value: !0 });
  })(n),
    document.addEventListener("DOMContentLoaded", function () {
      document.body.insertAdjacentHTML(
        "afterbegin",
        '\n        <header class="navbar">\n            <nav>\n                <a href="index.html" class="logo">Joy</a>\n                <button class="menu-toggle" aria-label="Toggle menu">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </button>\n                <ul class="nav-links">\n                <li><a href="index.html">Home</a></li>\n\n                    <li><a href="menu.html">Menu</a></li>\n                    <li><a href="about.html#about">About</a></li>\n                    <li><a href="index.html#location">Location</a></li>\n                 </ul>\n            </nav>\n        </header>\n        <div id="cart-icon">\n            <i class="fas fa-shopping-cart"></i>\n            <span id="cart-count">0</span>\n        </div>\n    '
      );
      var n = document.querySelector(".menu-toggle"),
        e = document.querySelector(".nav-links");
      n &&
        e &&
        n.addEventListener("click", function () {
          e.classList.toggle("active"), n.classList.toggle("active");
        }),
        window.addEventListener("scroll", function () {
          var n = document.querySelector(".navbar");
          n && n.classList.toggle("scrolled", window.scrollY > 50);
        });
      var t = document.getElementById("cart-icon"),
        a = document.getElementById("cart-section");
      t &&
        a &&
        t.addEventListener("click", function () {
          a.classList.toggle("active");
        });
    }),
    (navBarBundle = n);
})();
