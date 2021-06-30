import { CLASSES, DOM_ELEMENTS, DATA_ATTR } from './constants';
import { isBurgerOpen } from './header/burger';

function openModal(modal) {
  if (!modal) return;

  DOM_ELEMENTS.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
  DOM_ELEMENTS.overlay.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;

  if (!isBurgerOpen()) {
    DOM_ELEMENTS.body.classList.remove(CLASSES.scrollHidden);
  }

  modal.classList.remove(CLASSES.active);
  DOM_ELEMENTS.overlay.classList.remove(CLASSES.active);
}

function controlModal() {
  const openModalButtons = document.querySelectorAll(DATA_ATTR.modal);
  const closeModalButtons = document.querySelectorAll(DATA_ATTR.modalClose);

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
