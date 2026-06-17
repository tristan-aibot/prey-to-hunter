document.addEventListener('DOMContentLoaded', () => {

  // ─── NAV SCROLL ───
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ─── NAV DROPDOWNS ───
  document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = btn.closest('.nav-dropdown');
      const wasOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!wasOpen) dropdown.classList.add('open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

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
  document.querySelectorAll('.section-label, .section-title, .toc-row').forEach(el => {
    if (!el.closest('.hero')) el.classList.add('reveal');
  });

  const tocList = document.querySelector('.toc-list');
  if (tocList) {
    tocList.querySelectorAll('.reveal').forEach((child, i) => {
      child.style.transitionDelay = Math.min(i * 0.07, 0.4) + 's';
    });
  }

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
