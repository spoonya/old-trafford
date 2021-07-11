import { CLASSES } from './constants';
import { isMobile, isMediaBreakpoint } from './helpers';
import { swiperProvider, swiperWork } from './sliders';

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add(CLASSES.show);
    }
  });
}

const options = {
  threshold: 0.75
};

const observer = new IntersectionObserver(onEntry, options);

function setDelay(el, delay) {
  el.style.transitionDelay = `${delay}s`;
}

function increaseDelay(delay) {
  if (isMobile() || isMediaBreakpoint(991.98)) {
    return delay + 0.15;
  }

  return delay + 0.3;
}

function setObserver(elements) {
  let delay = 0;

  elements.forEach((el) => {
    el.classList.add(CLASSES.elementFade);

    delay = increaseDelay(delay);
    setDelay(el, delay);
    observer.observe(el);
  });
}

function groupElements(swiper) {
  const groupedArr = [];
  const groupedSubArr = [];
  const slidesPerPage =
    swiper.params.slidesPerColumn * swiper.params.slidesPerView;

  let curSlide = 1;

  for (let i = 0; i < swiper.slides.length; i++) {
    groupedSubArr.push(swiper.slides[i]);

    curSlide += 1;

    if (curSlide > slidesPerPage) {
      groupedArr.push(groupedSubArr.slice());
      groupedSubArr.length = 0;
      curSlide = 1;
    }
  }

  return groupedArr;
}

function observeForFadeIn() {
  groupElements(swiperProvider).forEach((el) => setObserver(el));
  groupElements(swiperWork).forEach((el) => setObserver(el));
}

export default observeForFadeIn;
