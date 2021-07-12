import { CLASSES, DOM, LOCATION } from '../constants';

export default function selectActiveMenuLink() {
  const indexPathName = '/index.html';
  const contactsPathName = '/contacts.html';
  const servicePathNames = [
    '/service-onetime.html',
    '/service-complex.html',
    '/service-repair.html',
    '/service-law.html'
  ];

  const findLinkByContent = (textContent) =>
    DOM.menuLinks.find((link) => link.textContent === textContent);

  const setActive = (linkEl) => linkEl.classList.add(CLASSES.active);

  function isIndexPage() {
    if (
      LOCATION.curLocation === LOCATION.origin ||
      LOCATION.curPathName === indexPathName
    ) {
      return true;
    }

    return false;
  }

  const isServicePage = () => {
    if (servicePathNames.includes(LOCATION.curPathName)) {
      return true;
    }

    return false;
  };

  const isContactsPage = () => {
    if (contactsPathName === LOCATION.curPathName) {
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

  if (isContactsPage()) {
    setActive(findLinkByContent('Контакты'));

    return;
  }

  for (let i = 0; i < DOM.menuLinks.length; i++) {
    if (!LOCATION.hash && DOM.menuLinks[i].href === LOCATION.curLocation) {
      setActive(DOM.menuLinks[i]);

      return;
    }
  }
}
