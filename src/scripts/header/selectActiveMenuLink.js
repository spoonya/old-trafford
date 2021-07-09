import { CLASSES, DOM_ELEMENTS, LOCATION } from '../constants';
import { isIndexPage } from '../helpers';

export default function selectActiveMenuLink() {
  const contactsPathName = '/contacts.html';
  const servicePathNames = [
    '/service-onetime.html',
    '/service-complex.html',
    '/service-repair.html',
    '/service-law.html'
  ];

  const findLinkByContent = (textContent) =>
    DOM_ELEMENTS.menuLinks.find((link) => link.textContent === textContent);

  const setActive = (linkEl) => linkEl.classList.add(CLASSES.active);

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

  for (let i = 0; i < DOM_ELEMENTS.menuLinks.length; i++) {
    if (
      !LOCATION.hash &&
      DOM_ELEMENTS.menuLinks[i].href === LOCATION.curLocation
    ) {
      setActive(DOM_ELEMENTS.menuLinks[i]);

      return;
    }
  }
}
