import { DOM_ELEMENTS } from '../constants';

const swiperWork = new Swiper('#swiper-work', {
  slidesPerColumnFill: 'row',

  spaceBetween: 10,

  allowTouchMove: false,

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
        swiperWork.update();
      }, 50);
    }
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,

      allowTouchMove: true
    },
    481: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 1,

      allowTouchMove: true
    },
    992: {
      slidesPerColumn: 1,
      slidesPerView: DOM_ELEMENTS.workItems.length,

      allowTouchMove: false
    }
  }
});

export default swiperWork;
