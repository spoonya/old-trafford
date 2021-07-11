import { spoilerDescrip } from '../spoilers';
import { DOM_ELEMENTS } from '../constants';

const swiperDescrip = new Swiper('#swiper-descrip', {
  slidesPerColumnFill: 'row',

  allowTouchMove: false,

  spaceBetween: 30,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  on: {
    resize() {
      setTimeout(() => {
        swiperDescrip.update();
      }, 50);
    },
    slideChange() {
      spoilerDescrip.closeAllSpoilers();
    }
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,

      allowTouchMove: true
    },
    992: {
      slidesPerView: 1,
      slidesPerColumn: DOM_ELEMENTS.descripItems.length,

      allowTouchMove: false
    }
  }
});

export default swiperDescrip;
