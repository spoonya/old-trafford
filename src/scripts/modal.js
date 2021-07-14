import { CLASSES, DOM, DATA_ATTR } from './constants';
import { isBurgerOpened } from './header/burger';
import { isMobile } from './helpers';

function controlCallbackFixed() {
  if (isMobile()) {
    DOM.callbackBtnFixed.classList.add(CLASSES.active);
  }
}

function openModal(modal) {
  if (!modal) return;

  DOM.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
  DOM.overlay.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;

  if (!isBurgerOpened()) {
    DOM.body.classList.remove(CLASSES.scrollHidden);
  }

  modal.classList.remove(CLASSES.active);
  DOM.overlay.classList.remove(CLASSES.active);
}

function controlModal() {
  controlCallbackFixed();

  const openModalButtons = document.querySelectorAll(DATA_ATTR.modal);
  const closeModalButtons = document.querySelectorAll(DATA_ATTR.modalClose);

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  DOM.overlay.addEventListener('click', () => {
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
export { closeModal };
