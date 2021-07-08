const swiperClients = new Swiper('#swiper-clients', {
  slidesPerColumnFill: 'row',

  allowTouchMove: false,

  spaceBetween: 20,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination'
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
      slidesPerColumn: 3,
      slidesPerView: 4,

      allowTouchMove: false
    }
  }
});

export default swiperClients;
