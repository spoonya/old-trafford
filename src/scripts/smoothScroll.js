import $ from '../local_modules/jquery/dist/jquery.min';
import { DOM_ELEMENTS, DATA_ATTR } from './constants';

function smoothScroll() {
  $(DATA_ATTR.scroll).on('click', function (e) {
    const href = $(this).attr('href');
    const stickyHeaderHeight = 70;

    if (this.hash !== '' && this.pathname === window.location.pathname) {
      $(DOM_ELEMENTS.html, DOM_ELEMENTS.body).animate(
        {
          scrollTop: $(href).offset().top - stickyHeaderHeight
        },
        '200'
      );

      e.preventDefault();
    }
  });
}

export default smoothScroll;
