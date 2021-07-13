import { DOM } from '../constants';

const swiperClients = new Swiper('#swiper-clients', {
  slidesPerColumnFill: 'row',

  allowTouchMove: false,

  spaceBetween: 20,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  autoplay: {
    delay: 5000
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  on: {
    resize() {
      setTimeout(() => {
        swiperClients.update();
      }, 50);
    }
  },

  breakpoints: {
    320: {
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      slidesPerView: 2,

      allowTouchMove: true
    },
    768: {
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      slidesPerView: 3,

      allowTouchMove: true
    },
    992: {
      slidesPerView: 4,
      slidesPerColumn: DOM.clientItems.length,

      allowTouchMove: false
    }
  }
});

export default swiperClients;
