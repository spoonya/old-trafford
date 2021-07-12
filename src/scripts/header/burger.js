import { CLASSES, DOM } from '../constants';
import { isMediaBreakpoint } from '../helpers';

function isBurgerOpened() {
  if (!DOM.burger.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}

function toggleBurger() {
  DOM.burger.addEventListener('click', () => {
    DOM.burger.classList.toggle(CLASSES.active);
    DOM.headerInfo.classList.add(CLASSES.active);
    DOM.headerTopWrapper.classList.toggle(CLASSES.active);
    DOM.body.classList.toggle(CLASSES.scrollHidden);
  });
}

function removeBurger() {
  DOM.burger.classList.remove(CLASSES.active);
  DOM.headerInfo.classList.remove(CLASSES.active);
  DOM.headerTopWrapper.classList.remove(CLASSES.active);
  DOM.body.classList.remove(CLASSES.scrollHidden);
}

function removeBurgerOnMedia() {
  if (!isMediaBreakpoint()) removeBurger();
}

function controlHeaderAdaptive() {
  toggleBurger();

  DOM.menuLinks.forEach((link) => {
    link.addEventListener('click', removeBurger);
  });
}

export default controlHeaderAdaptive;
export { isBurgerOpened, removeBurgerOnMedia };
