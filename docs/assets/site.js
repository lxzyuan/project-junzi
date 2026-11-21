(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('language-button');
  const menuButton = document.getElementById('menu-button');
  const nav = document.getElementById('site-nav');
  const LANG_KEY = 'junzi-site-language';

  function applyLanguage(language) {
    const isZh = language === 'zh-CN';
    root.lang = isZh ? 'zh-CN' : 'en';
    document.title = isZh ? 'Project JUNZI · 君子计划 | 以经权为尺' : 'Project JUNZI · 君子计划 | Values into Behavior';
    toggle.setAttribute('aria-label', isZh ? '切换到 English' : 'Switch to Chinese');
    toggle.setAttribute('title', isZh ? 'Switch to English' : '切换为中文');
    try { localStorage.setItem(LANG_KEY, root.lang); } catch (_) { /* private browsing */ }
  }

  let preferred = 'en';
  try { preferred = localStorage.getItem(LANG_KEY) || 'en'; } catch (_) { /* private browsing */ }
  applyLanguage(preferred);
  toggle.addEventListener('click', () => applyLanguage(root.lang === 'en' ? 'zh-CN' : 'en'));

  function closeMenu() {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', root.lang === 'zh-CN' ? '打开菜单' : 'Open menu');
  }
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? (root.lang === 'zh-CN' ? '关闭菜单' : 'Close menu') : (root.lang === 'zh-CN' ? '打开菜单' : 'Open menu'));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (!nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu(); });

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-20% 0px -68% 0px', threshold: 0});
    sections.forEach(section => observer.observe(section));
  }
})();
