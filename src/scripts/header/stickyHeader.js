import { DOM_ELEMENTS } from '../constants';

function lockHeader() {
  let offset;

  if (DOM_ELEMENTS.introSection) {
    offset =
      DOM_ELEMENTS.introSection.offsetHeight + DOM_ELEMENTS.header.offsetHeight;
  } else {
    offset = DOM_ELEMENTS.header.offsetHeight;
  }

  window.addEventListener('scroll', () => {
    DOM_ELEMENTS.header.classList.toggle('sticky', window.pageYOffset > offset);
  });
}

export default lockHeader;
