export default function selectActiveMenuLink() {
  const curLocation = window.location.href;
  const origin = `${window.location.origin}/`;
  const pathName = window.location.pathname;
  const { hash } = window.location;
  const menuLinks = [...document.querySelectorAll('.header__menu a')];

  const indexPathName = '/index.html';
  const serviceHrefs = [
    '/service-onetime.html',
    '/service-complex.html',
    '/service-repair.html',
    '/service-law.html'
  ];

  const findLink = (comparator) =>
    menuLinks.find((el) => el.textContent === comparator);

  const setActive = (linkEl) => {
    linkEl.classList.add('active');
  };

  const isIndexPage = () => {
    if (curLocation === origin || pathName === indexPathName) {
      setActive(findLink('Главная'));

      return true;
    }

    return false;
  };

  const isServicePage = () => {
    if (serviceHrefs.includes(pathName)) {
      setActive(findLink('Услуги'));

      return true;
    }

    return false;
  };

  for (let i = 0; i < menuLinks.length; i++) {
    if (isIndexPage()) return;
    if (isServicePage()) return;

    if (!hash && menuLinks[i].href === curLocation) {
      setActive(menuLinks[i]);
    }
  }
}
