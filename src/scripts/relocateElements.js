import { CLASSES, DOM_ELEMENTS } from './constants';
import isMediaBreakpoint from './helpers/isMedia';

function moveHeaderInfoEl() {
  if (isMediaBreakpoint()) {
    DOM_ELEMENTS.headerTop.append(DOM_ELEMENTS.headerInfo);
  } else {
    DOM_ELEMENTS.headerBot.append(DOM_ELEMENTS.headerInfo);
  }
}

function moveHeaderPhonesEl() {
  const phonesContainer = document.createElement('ul');
  phonesContainer.classList.add(CLASSES.phones);
  phonesContainer.append(...DOM_ELEMENTS.headerMobileNums);

  if (isMediaBreakpoint()) {
    DOM_ELEMENTS.headerLogoContent.append(phonesContainer);
  } else {
    DOM_ELEMENTS.headerPhones.append(phonesContainer);
  }
}

function moveIntroCallback() {
  if (!DOM_ELEMENTS.introCallback) return;

  if (isMediaBreakpoint()) {
    DOM_ELEMENTS.descripSection.prepend(DOM_ELEMENTS.introCallback);
  } else {
    DOM_ELEMENTS.introSectionButtons.append(DOM_ELEMENTS.introCallback);
  }
}

function moveCompanyTitle() {
  if (!DOM_ELEMENTS.companyTitle) return;

  if (isMediaBreakpoint(991.98)) {
    DOM_ELEMENTS.companySection.prepend(DOM_ELEMENTS.companyTitle);
  } else {
    DOM_ELEMENTS.companyInfo.prepend(DOM_ELEMENTS.companyTitle);
  }
}

function relocateElements() {
  moveHeaderInfoEl();
  moveHeaderPhonesEl();
  moveIntroCallback();
  moveCompanyTitle();
}

window.addEventListener('resize', () => {
  setTimeout(() => {
    relocateElements();
  }, 100);
});

export default relocateElements;
