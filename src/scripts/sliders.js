/* eslint-disable no-undef */
function initSwiper() {
  const swiperProvider = new Swiper('#swiper-provider', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    slidesPerColumn: 2,
    observer: true,
    observeParents: true,
    spaceBetween: 20,
    slidesPerColumnFill: 'row',

    pagination: {
      el: '.swiper-pagination'
    },

    breakpoints: {
      481: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 2
      },
      768: {
        slidesPerGroup: 8,
        slidesPerView: 'auto',
        allowTouchMove: false,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        spaceBetween: 0
      }
    }
  });

  const swiperFeatures = new Swiper('#swiper-features', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination'
    },

    breakpoints: {
      768: {
        slidesPerGroup: 8,
        slidesPerView: 'auto',
        allowTouchMove: false
      }
    }
  });
}

export default initSwiper;
