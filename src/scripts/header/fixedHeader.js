import { DOM_ELEMENTS, CLASSES } from '../constants';

function getHeaderHeight() {
  return DOM_ELEMENTS.header.offsetHeight;
}

function getIntroHeight() {
  return DOM_ELEMENTS.introSection.offsetHeight;
}

function calcOffset() {
  let offset;

  if (DOM_ELEMENTS.introSection) {
    offset = getIntroHeight() + getHeaderHeight();
  } else {
    offset = getHeaderHeight();
  }

  return offset;
}

function lockHeader() {
  let offset = calcOffset();

  window.addEventListener('resize', () => {
    offset = calcOffset();
  });

  window.addEventListener('scroll', () => {
    DOM_ELEMENTS.header.classList.toggle(
      CLASSES.fixed,
      window.pageYOffset > offset
    );
  });
}

export default lockHeader;
