import { CLASSES, DOM } from './constants';
import { isMediaBreakpoint } from './helpers';

function moveHeaderInfoEl() {
  if (isMediaBreakpoint()) {
    DOM.headerTop.append(DOM.headerInfo);
  } else {
    DOM.headerBot.append(DOM.headerInfo);
  }
}

function createWrapperForMobileNums() {
  const phonesContainer = document.createElement('ul');
  phonesContainer.classList.add(CLASSES.phones);

  phonesContainer.append(...DOM.headerMobileNums);

  return phonesContainer;
}

function movePhonesOnScroll(isPageYOffset = false) {
  if (!isMediaBreakpoint()) {
    const phones = DOM.headerTopRight.querySelector(`.${CLASSES.phones}`);
    if (phones) phones.remove();

    DOM.headerTopRight.prepend(createWrapperForMobileNums());
  }

  if (!isPageYOffset && !isMediaBreakpoint()) {
    DOM.headerPhones.append(...DOM.headerMobileNums);
  }
}

function movePhonesOnResize() {
  if (isMediaBreakpoint()) {
    const phones = DOM.headerLogoContent.querySelector(`.${CLASSES.phones}`);
    if (phones) phones.remove();

    DOM.headerLogoContent.append(createWrapperForMobileNums());
  } else if (!DOM.header.classList.contains(CLASSES.fixed)) {
    DOM.headerPhones.append(...DOM.headerMobileNums);
  }
}

function moveIntroCallback() {
  if (!DOM.introCallback) return;

  if (isMediaBreakpoint()) {
    DOM.descripSection.prepend(DOM.introCallback);
    DOM.introCallback.classList.add(CLASSES.active);
  } else {
    DOM.introSectionButtons.append(DOM.introCallback);
  }
}

function moveCompanyTitle() {
  if (!DOM.companyTitle) return;

  if (isMediaBreakpoint(991.98)) {
    DOM.companySection.prepend(DOM.companyTitle);
  } else {
    DOM.companyInfo.prepend(DOM.companyTitle);
  }
}

function relocateElements() {
  moveHeaderInfoEl();
  movePhonesOnResize();
  moveIntroCallback();
  moveCompanyTitle();
}

export default relocateElements;
export { movePhonesOnScroll };
