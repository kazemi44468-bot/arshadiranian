document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const menuButton = document.querySelector('.menu-btn');
  const links = document.querySelector('.links');

  if (nav && menuButton && links) {
    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'بستن' : 'منو';
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'منو';
      });
    });
  }

  const back = document.createElement('button');
  back.className = 'back-to-top';
  back.type = 'button';
  back.setAttribute('aria-label', 'بازگشت به بالای صفحه');
  back.textContent = '↑';
  document.body.appendChild(back);

  const updateBackButton = () => {
    back.classList.toggle('is-visible', window.scrollY > 500);
  };

  window.addEventListener('scroll', updateBackButton, { passive: true });
  updateBackButton();

  back.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
