// Smooth scrolling for in-page anchor links (Project 1–5 jump buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back-to-top button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// Feature 1: Dark/Light mode toggle, remembered across visits
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
  }
  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeBtn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeBtn.textContent = '☀️';
    }
  });
}
// Feature 2: Personalized greeting from user input
const greetBtn = document.getElementById('greetBtn');
if (greetBtn) {
  greetBtn.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    const output = document.getElementById('greetOutput');
    output.textContent = name
      ? `Welcome, ${name}! Thanks for checking out my site.`
      : 'Type your name above and I\'ll say hi!';
  });
}
// Highlight current page link in navbar
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
// Smooth scroll for navbar dropdown links that point to Projects.html#section
document.querySelectorAll('a[href*="Projects.html#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const isSamePage = window.location.pathname.endsWith('Projects.html') ||
                        window.location.pathname.endsWith('projects.html');
    if (isSamePage) {
      const id = this.getAttribute('href').split('#')[1];
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});