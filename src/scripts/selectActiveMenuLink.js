import { DOM_ELEMENTS } from './constants';

export default function selectActiveMenuLink() {
  const curLocation = window.location.href;
  const curPathName = window.location.pathname;
  const origin = `${window.location.origin}/`;
  const { hash } = window.location;

  const indexPathName = '/index.html';
  const contactsPathName = '/contacts.html';
  const servicePathNames = [
    '/service-onetime.html',
    '/service-complex.html',
    '/service-repair.html',
    '/service-law.html'
  ];

  const findLinkByContent = (textContent) =>
    DOM_ELEMENTS.menuLinks.find((link) => link.textContent === textContent);

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

  const isContactsPage = () => {
    if (contactsPathName === curPathName) {
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
    if (!hash && DOM_ELEMENTS.menuLinks[i].href === curLocation) {
      setActive(DOM_ELEMENTS.menuLinks[i]);

      return;
    }
  }
}
