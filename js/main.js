const menuToggle = document.querySelector('.menu-toggle');
const primaryMenu = document.querySelector('#primary-menu');

function closeMenu() {
  if (!menuToggle || !primaryMenu) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  primaryMenu.classList.remove('is-open');
}

if (menuToggle && primaryMenu) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    primaryMenu.classList.toggle('is-open', !isExpanded);
  });

  primaryMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 681px)').matches) closeMenu();
  });
}

const year = document.querySelector('#currentYear');
if (year) year.textContent = String(new Date().getFullYear());
