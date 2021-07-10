import { DOM_ELEMENTS, CLASSES } from './constants';

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add(CLASSES.show);
    }
  });
}

function observeForFadeIn() {
  const options = {
    threshold: 1
  };

  const observer = new IntersectionObserver(onEntry, options);

  DOM_ELEMENTS.workItems.forEach((el) => {
    observer.observe(el);
  });
}

export default observeForFadeIn;
