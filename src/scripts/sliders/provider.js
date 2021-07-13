const swiperProvider = new Swiper('#swiper-provider', {
  slidesPerColumnFill: 'row',

  allowTouchMove: false,

  spaceBetween: 20,

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
        swiperProvider.update();
      }, 50);
    }
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerColumn: 4,
      slidesPerView: 1,

      allowTouchMove: true
    },
    480: {
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      slidesPerView: 2,

      allowTouchMove: true
    },
    992: {
      slidesPerView: 4,
      slidesPerColumn: 2,

      allowTouchMove: false
    }
  }
});

export default swiperProvider;
