import { CLASSES, DOM } from '../constants';
import { isMediaBreakpoint } from '../helpers';

class Spoiler {
  constructor(spoilers, custom = null, isOnlyOneOpen = false) {
    this.spoilers = spoilers;
    this.custom = custom;
    this.isOnlyOneOpen = isOnlyOneOpen;
    this.isOnMedia = false;
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

  _scrollIntoView(el) {
    const elPos = el.getBoundingClientRect().top;
    const offsetPosition = elPos - DOM.header.clientHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  closeAll() {
    this.spoilers.forEach((spoiler) => {
      if (spoiler.open) spoiler.open = false;
    });

    this._controlSpoilerLabel();
  }

  _onToggle(e) {
    if (e.target.open) {
      document.querySelectorAll('details[open]').forEach((el) => {
        if (el === e.target) {
          e.target.querySelector('summary span').textContent = 'скрыть';

          return;
        }

        el.open = false;
        el.querySelector('summary span').textContent = 'подробнее';
      });
    }
  }

  _closeAllExceptLast() {
    this.spoilers.forEach((spoiler) =>
      spoiler.addEventListener('toggle', this._onToggle)
    );
  }

  _addClickEvtCustom() {
    this.custom.forEach((obj) => {
      const spoilerBtn = obj.spoiler.querySelector('summary');

      spoilerBtn.addEventListener('click', () => {
        if (!this._isSpoilerOpen(obj.spoiler)) {
          document
            .querySelectorAll(`.${obj.spoilerContent.className}`)
            .forEach((item) => item.classList.remove(CLASSES.active));
          obj.spoilerContent.classList.add(CLASSES.active);

          if (DOM.onetimeCallback) {
            DOM.onetimeCallback.classList.add(CLASSES.inactvie);
          }

          this._scrollIntoView(obj.spoilerContent);
        } else {
          obj.spoilerContent.classList.remove(CLASSES.active);

          if (DOM.onetimeCallback) {
            DOM.onetimeCallback.classList.remove(CLASSES.inactvie);
          }
        }
      });
    });
  }

  _addClickEvt() {
    this.spoilers.forEach((spoiler) => {
      const summary = spoiler.querySelector('summary');
      const label = spoiler.querySelector('span');

      summary.addEventListener('click', () => {
        this._renameLabel(label, !this._isSpoilerOpen(spoiler));
      });
    });
  }

  _controlSpoilerLabel() {
    this.spoilers.forEach((spoiler) => {
      const label = spoiler.querySelector('span');

      this._renameLabel(label, this._isSpoilerOpen(spoiler));
    });
  }

  controlSpoiler() {
    if (isMediaBreakpoint(991.98) && this.isOnMedia) return;

    if (isMediaBreakpoint(991.98)) {
      this.isOnMedia = true;

      this.spoilers.forEach((spoiler) => {
        spoiler.open = false;
      });
    } else {
      this.isOnMedia = false;

      this.spoilers.forEach((spoiler) => {
        spoiler.open = true;
      });
    }

    this._controlSpoilerLabel();
  }

  init() {
    if (!this.spoilers.length) return;

    this._addClickEvt();
    if (!this.custom) this.controlSpoiler();
    if (this.isOnlyOneOpen) this._closeAllExceptLast();
    if (this.custom) this._addClickEvtCustom();
  }
}

export default Spoiler;
