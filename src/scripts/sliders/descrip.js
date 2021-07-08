const swiperDescrip = new Swiper('#swiper-descrip', {
  slidesPerColumnFill: 'row',

  allowTouchMove: false,

  spaceBetween: 30,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination'
  },

  on: {
    resize() {
      setTimeout(() => {
        swiperDescrip.update();
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
    992: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 3,

      allowTouchMove: false
    }
  }
});

export default swiperDescrip;
