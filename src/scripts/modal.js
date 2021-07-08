import { CLASSES, DOM_ELEMENTS, DATA_ATTR } from './constants';
import { isBurgerOpened } from './header/burger';
import isMobile from './helpers/isMobile';

function controlCallbackFixed() {
  if (isMobile()) {
    DOM_ELEMENTS.callbackBtnFixed.classList.add(CLASSES.active);
  } else {
    DOM_ELEMENTS.callbackBtnFixed.classList.remove(CLASSES.active);
  }
}

function openModal(modal) {
  if (!modal) return;

  DOM_ELEMENTS.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
  DOM_ELEMENTS.overlay.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;

  if (!isBurgerOpened()) {
    DOM_ELEMENTS.body.classList.remove(CLASSES.scrollHidden);
  }

  modal.classList.remove(CLASSES.active);
  DOM_ELEMENTS.overlay.classList.remove(CLASSES.active);
}

function controlModal() {
  const openModalButtons = document.querySelectorAll(DATA_ATTR.modal);
  const closeModalButtons = document.querySelectorAll(DATA_ATTR.modalClose);

  controlCallbackFixed();

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  DOM_ELEMENTS.overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(
      `.${CLASSES.modal}.${CLASSES.active}`
    );
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest(`.${CLASSES.modal}`);
      closeModal(modal);
    });
  });
}

export default controlModal;
