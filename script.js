const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

function setMenu(open) {
  if (!navToggle || !primaryNav) return;
  navToggle.setAttribute('aria-expanded', String(open));
  primaryNav.dataset.open = String(open);
}

navToggle?.addEventListener('click', () => setMenu(navToggle.getAttribute('aria-expanded') !== 'true'));
primaryNav?.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
document.querySelector('#year').textContent = String(new Date().getFullYear());
