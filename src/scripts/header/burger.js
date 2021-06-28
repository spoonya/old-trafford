import { CLASSES, DOM_ELEMENTS } from '../constants';

function isMediaBreakpoint() {
  const mediaBreakpoint = 768;

  if (document.documentElement.clientWidth < mediaBreakpoint) {
    return true;
  }

  return false;
}

function toggleBurgerClasses() {
  DOM_ELEMENTS.burger.addEventListener('click', () => {
    DOM_ELEMENTS.burger.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.headerTopWrapper.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.body.classList.toggle(CLASSES.scrollHidden);
  });
}

function removeBurgerClasses() {
  if (isMediaBreakpoint()) return;

  DOM_ELEMENTS.burger.classList.remove(CLASSES.active);
  DOM_ELEMENTS.headerTopWrapper.classList.remove(CLASSES.active);
  DOM_ELEMENTS.body.classList.remove(CLASSES.scrollHidden);
}

function moveHeaderInfoEl() {
  if (isMediaBreakpoint()) {
    DOM_ELEMENTS.headerTop.append(DOM_ELEMENTS.headerInfo);
  } else {
    DOM_ELEMENTS.headerBotInner.append(DOM_ELEMENTS.headerInfo);
  }
}

function controlHeaderAdaptive() {
  moveHeaderInfoEl();
  toggleBurgerClasses();

  window.addEventListener('resize', () => {
    moveHeaderInfoEl();
    removeBurgerClasses();
  });
}

export default controlHeaderAdaptive;
