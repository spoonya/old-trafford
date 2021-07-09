import { isMediaBreakpoint } from '../helpers';
import { DOM_ELEMENTS } from '../constants';

function isSpoilerOpen(spoiler) {
  if (!spoiler.open) return false;

  return true;
}

function renameLabel(label, isOpen) {
  if (isOpen) {
    label.textContent = 'скрыть';
  } else {
    label.textContent = 'подробнее';
  }
}

function addClickEvt() {
  DOM_ELEMENTS.detailsDescrip.forEach((spoiler) => {
    const summary = spoiler.querySelector('summary');
    const label = spoiler.querySelector('span');

    summary.addEventListener('click', () => {
      renameLabel(label, !isSpoilerOpen(spoiler));
    });
  });
}

function controlSpoilerLabel() {
  DOM_ELEMENTS.detailsDescrip.forEach((spoiler) => {
    const label = spoiler.querySelector('span');

    renameLabel(label, isSpoilerOpen(spoiler));
  });
}

function setSpoilerState() {
  if (isMediaBreakpoint(991.98)) {
    DOM_ELEMENTS.detailsDescrip.forEach((spoiler) => {
      spoiler.open = false;
    });
  } else {
    DOM_ELEMENTS.detailsDescrip.forEach((spoiler) => {
      spoiler.open = true;
    });
  }

  controlSpoilerLabel();
}

function closeAllSpoilers() {
  DOM_ELEMENTS.detailsDescrip.forEach((spoiler) => {
    if (spoiler.open) spoiler.open = false;
  });

  controlSpoilerLabel();
}

function controlDescripSpoiler() {
  setSpoilerState();
}

addClickEvt();

export default controlDescripSpoiler;
export { closeAllSpoilers };
