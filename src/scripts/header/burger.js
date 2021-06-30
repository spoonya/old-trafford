import { CLASSES, DOM_ELEMENTS } from '../constants';

const animationConfig = {
  duration: 150,
  easing: 'ease-in',
  iterations: 1
};

function isMediaBreakpoint() {
  const mediaBreakpoint = 767.98;

  if (document.documentElement.clientWidth > mediaBreakpoint) {
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
    DOM_ELEMENTS.headerTopWrapper.classList.toggle(CLASSES.active);
    DOM_ELEMENTS.body.classList.toggle(CLASSES.scrollHidden);
  });
}

function removeBurger() {
  if (isMediaBreakpoint()) activateAnimation(true);

  setTimeout(() => {
    DOM_ELEMENTS.burger.classList.remove(CLASSES.active);
    DOM_ELEMENTS.headerTopWrapper.classList.remove(CLASSES.active);
    DOM_ELEMENTS.body.classList.remove(CLASSES.scrollHidden);
  }, animationConfig.duration);
}

function moveHeaderInfoEl() {
  if (isMediaBreakpoint()) {
    DOM_ELEMENTS.headerTop.append(DOM_ELEMENTS.headerInfo);
  } else {
    DOM_ELEMENTS.headerBot.append(DOM_ELEMENTS.headerInfo);
  }
}

function controlHeaderAdaptive() {
  moveHeaderInfoEl();
  toggleBurger();

  DOM_ELEMENTS.menuLinks.forEach((link) => {
    link.addEventListener('click', removeBurger);
  });

  window.addEventListener('resize', () => {
    moveHeaderInfoEl();

    if (!isMediaBreakpoint()) removeBurger();
  });
}

function isBurgerOpen() {
  if (!DOM_ELEMENTS.burger.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}

export default controlHeaderAdaptive;
export { isBurgerOpen };
