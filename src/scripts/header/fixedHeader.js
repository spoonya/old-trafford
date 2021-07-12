import { DOM, CLASSES } from '../constants';
import { movePhonesOnScroll } from '../relocateElements';

function getHeaderHeight() {
  return DOM.header.offsetHeight;
}

function getIntroHeight() {
  return DOM.introSection.offsetHeight;
}

function calcOffset() {
  let offset;

  if (DOM.introSection) {
    offset = getIntroHeight() + getHeaderHeight();
  } else {
    offset = getHeaderHeight();
  }

  return offset;
}

function lockHeader() {
  let offset = calcOffset();
  movePhonesOnScroll(window.pageYOffset > offset);

  window.addEventListener('resize', () => {
    offset = calcOffset();
  });

  window.addEventListener('scroll', () => {
    DOM.header.classList.toggle(CLASSES.fixed, window.pageYOffset > offset);
    movePhonesOnScroll(window.pageYOffset > offset);
  });
}

export default lockHeader;
