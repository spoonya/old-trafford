const swiperFeatures = new Swiper('#swiper-features', {
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
        swiperFeatures.update();
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
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 1,

      allowTouchMove: true
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2,

      allowTouchMove: false
    }
  }
});

export default swiperFeatures;
