/* ============================================================
   SEDAudio – site.js
   Shared utilities: component injection, cookie consent.
   No jQuery dependency – vanilla JS only.
   ============================================================ */

/* ---------- Component loader (replaces jQuery $.load) ---------- */
function loadComponent(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;
  fetch(file)
    .then(r => {
      if (!r.ok) throw new Error('Failed to load ' + file);
      return r.text();
    })
    .then(html => { el.innerHTML = html; })
    .catch(console.error);
}

document.addEventListener('DOMContentLoaded', function () {
  loadComponent('#includedNavbar', 'main-navbar.html');
  loadComponent('#includedFooter', 'footer.html');
  initCookieBanner();
});

/* ---------- Cookie Consent ---------- */
function initCookieBanner() {
  const COOKIE_KEY = 'sed_cookie_consent';
  const stored     = localStorage.getItem(COOKIE_KEY);

  // If already answered, apply choice and bail
  if (stored === 'accepted') { enableAnalytics(); return; }
  if (stored === 'declined') { return; }

  // Show banner after short delay for UX
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  setTimeout(() => banner.classList.add('visible'), 600);

  document.getElementById('cookie-accept').addEventListener('click', function () {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    banner.classList.remove('visible');
    enableAnalytics();
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    localStorage.setItem(COOKIE_KEY, 'declined');
    banner.classList.remove('visible');
  });
}

/* ---------- Analytics (only loaded after explicit consent) ---------- */
// Security: the GA4 endpoint and measurement ID are hardcoded literals —
// they are never derived from localStorage, user input, or any runtime value.
const GA4_ID  = 'G-66GTT1F018';
const GA4_URL = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;

function enableAnalytics() {
  if (window._analyticsLoaded) return;
  window._analyticsLoaded = true;

  var s = document.createElement('script');
  s.async = true;
  s.src   = GA4_URL; // hardcoded — not derived from any external source
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_ID);
}
