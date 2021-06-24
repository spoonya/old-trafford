export default function selectActiveMenuLink() {
  const curLocation = window.location.href;
  const curPathName = window.location.pathname;
  const origin = `${window.location.origin}/`;
  const { hash } = window.location;
  const menuLinks = [...document.querySelectorAll('.header__menu a')];

  const indexPathName = '/index.html';
  const servicePathNames = [
    '/service-onetime.html',
    '/service-complex.html',
    '/service-repair.html',
    '/service-law.html'
  ];

  const findLinkByContent = (textContent) =>
    menuLinks.find((link) => link.textContent === textContent);

  const setActive = (linkEl) => linkEl.classList.add('active');

  const isIndexPage = () => {
    if (curLocation === origin || curPathName === indexPathName) {
      return true;
    }

    return false;
  };

  const isServicePage = () => {
    if (servicePathNames.includes(curPathName)) {
      return true;
    }

    return false;
  };

  if (isIndexPage()) {
    setActive(findLinkByContent('Главная'));

    return;
  }

  if (isServicePage()) {
    setActive(findLinkByContent('Услуги'));

    return;
  }

  for (let i = 0; i < menuLinks.length; i++) {
    if (!hash && menuLinks[i].href === curLocation) {
      setActive(menuLinks[i]);

      return;
    }
  }
}
