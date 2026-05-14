
window.addEventListener('DOMContentLoaded', () => {
  ['he', 'hn', 'hs', 'hc'].forEach((id, i) => {
    setTimeout(() => document.getElementById(id).classList.add('show'), 80 + i * 130);
  });
});

// nav border scroll
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// fade in
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.fade').forEach(el => io.observe(el));
