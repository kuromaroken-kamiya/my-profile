// ============================================================
//  Portfolio — 神谷健一 — main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // ── Scroll-triggered fade-in ──────────────────────────────
  const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.observe').forEach(el => observer.observe(el));

  // ── Active nav highlight ──────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.color = isActive ? 'var(--green)' : '';
      a.style.fontWeight = isActive ? '500' : '';
    });
  }, { passive: true });
});

// ── Mobile menu ─────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── FAQ accordion ───────────────────────────────────────────
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  // Toggle clicked
  if (!wasOpen) item.classList.add('open');
}

// ── Contact form ────────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '送信しました！ ありがとうございます';
  btn.disabled = true;
  btn.style.opacity = '.7';
}
