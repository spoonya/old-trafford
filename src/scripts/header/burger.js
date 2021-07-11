import { CLASSES, DOM_ELEMENTS } from '../constants';
import { isMediaBreakpoint } from '../helpers';

function isBurgerOpened() {
  if (!DOM_ELEMENTS.burger.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}

function toggleBurger() {
  DOM_ELEMENTS.burger.addEventListener('click', () => {
    DOM_ELEMENTS.burger.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.headerInfo.classList.add(CLASSES.active);
    DOM_ELEMENTS.headerTopWrapper.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.body.classList.toggle(CLASSES.scrollHidden);
  });
}

function removeBurger() {
  DOM_ELEMENTS.burger.classList.remove(CLASSES.active);
  DOM_ELEMENTS.headerInfo.classList.remove(CLASSES.active);
  DOM_ELEMENTS.headerTopWrapper.classList.remove(CLASSES.active);
  DOM_ELEMENTS.body.classList.remove(CLASSES.scrollHidden);
}

function removeBurgerOnMedia() {
  if (!isMediaBreakpoint()) removeBurger();
}

function controlHeaderAdaptive() {
  toggleBurger();

  DOM_ELEMENTS.menuLinks.forEach((link) => {
    link.addEventListener('click', removeBurger);
  });
}

export default controlHeaderAdaptive;
export { isBurgerOpened, removeBurgerOnMedia };
