import { CLASSES, DOM_ELEMENTS } from '../constants';
import { isMediaBreakpoint } from '../helpers';

const animationConfig = {
  duration: 150,
  easing: 'ease-in',
  iterations: 1
};

function isBurgerOpened() {
  if (!DOM_ELEMENTS.burger.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}

function activateAnimation(onClose = false) {
  const selectAnimeDir = () => {
    if (!onClose) {
      return [
        {
          opacity: '0'
        },
        {
          opacity: '1'
        }
      ];
    }
    return [
      {
        opacity: '1'
      },
      {
        opacity: '0'
      }
    ];
  };

  DOM_ELEMENTS.headerTopWrapper.animate(selectAnimeDir(), {
    ...animationConfig
  });
}

function toggleBurger() {
  DOM_ELEMENTS.burger.addEventListener('click', () => {
    activateAnimation();

    DOM_ELEMENTS.burger.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.headerInfo.classList.add(CLASSES.active);
    DOM_ELEMENTS.headerTopWrapper.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.body.classList.toggle(CLASSES.scrollHidden);
  });
}

function removeBurger() {
  if (isMediaBreakpoint()) activateAnimation(true);

  setTimeout(() => {
    DOM_ELEMENTS.burger.classList.remove(CLASSES.active);
    DOM_ELEMENTS.headerInfo.classList.remove(CLASSES.active);
    DOM_ELEMENTS.headerTopWrapper.classList.remove(CLASSES.active);
    DOM_ELEMENTS.body.classList.remove(CLASSES.scrollHidden);
  }, animationConfig.duration);
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
