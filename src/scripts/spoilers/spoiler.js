import { isMediaBreakpoint } from '../helpers';

class Spoiler {
  constructor(spoilers) {
    this.spoilers = spoilers;
  }

  _isSpoilerOpen(spoiler) {
    if (!spoiler.open) return false;

    return true;
  }

  _renameLabel(label, isOpen) {
    if (isOpen) {
      label.textContent = 'скрыть';
    } else {
      label.textContent = 'подробнее';
    }
  }

  _addClickEvt() {
    if (!this.spoilers) return;

    this.spoilers.forEach((spoiler) => {
      const summary = spoiler.querySelector('summary');
      const label = spoiler.querySelector('span');

      summary.addEventListener('click', () => {
        this._renameLabel(label, !this._isSpoilerOpen(spoiler));
      });
    });
  }

  _controlSpoilerLabel() {
    if (!this.spoilers) return;

    this.spoilers.forEach((spoiler) => {
      const label = spoiler.querySelector('span');

      this._renameLabel(label, this._isSpoilerOpen(spoiler));
    });
  }

  closeAllSpoilers() {
    if (!this.spoilers) return;

    this.spoilers.forEach((spoiler) => {
      if (spoiler.open) spoiler.open = false;
    });

    this._controlSpoilerLabel();
  }

  controlSpoiler() {
    if (!this.spoilers) return;

    if (isMediaBreakpoint(991.98)) {
      this.spoilers.forEach((spoiler) => {
        spoiler.open = false;
      });
    } else {
      this.spoilers.forEach((spoiler) => {
        spoiler.open = true;
      });
    }

    this._controlSpoilerLabel();
  }

  init() {
    this._addClickEvt();
    this.controlSpoiler();
  }
}

export default Spoiler;
