// ------------------------------------------------------------------
// Portfolio — small progressive-enhancement helpers.
// Works without JS; this only improves the experience.
// ------------------------------------------------------------------

(function () {
  'use strict';

  // --- Current year in footer ---
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Mobile nav toggle ---
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu after clicking a link (mobile).
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
