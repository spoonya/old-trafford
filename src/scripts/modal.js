const overlay = document.querySelector('#overlay');
const body = document.querySelector('body');

function openModal(modal) {
  if (!modal) return;

  body.classList.add('scroll-hidden');
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (!modal) return;

  body.classList.remove('scroll-hidden');
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function controlModal() {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
}

export default controlModal;
