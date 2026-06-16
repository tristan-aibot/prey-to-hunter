document.addEventListener('DOMContentLoaded', () => {

  // ─── NAV SCROLL ───
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ─── HERO TEKST REVEAL ───
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const html = heroTitle.innerHTML;
    const words = html.split(/(\s+|<br\/>|<em>.*?<\/em>)/g).filter(Boolean);
    heroTitle.innerHTML = words.map((word, i) => {
      if (word.match(/^\s+$/)) return word;
      return `<span style="display:inline-block;opacity:0;transform:translateY(20px);transition:opacity 0.5s ease ${0.3 + i * 0.06}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.06}s">${word}</span>`;
    }).join('');
    setTimeout(() => {
      heroTitle.querySelectorAll('span').forEach(s => {
        s.style.opacity = '1';
        s.style.transform = 'translateY(0)';
      });
    }, 100);
  }

  // ─── SCROLL REVEAL ───
  const revealSelectors = [
    '.section-label', '.section-title', '.section-sub', '.cat-card'
  ];

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.closest('.hero')) {
        el.classList.add('reveal');
      }
    });
  });

  const staggerContainers = ['.cat-grid'];
  staggerContainers.forEach(selector => {
    const container = document.querySelector(selector);
    if (!container) return;
    container.querySelectorAll('.reveal').forEach((child, i) => {
      child.style.transitionDelay = Math.min(i * 0.06, 0.4) + 's';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
