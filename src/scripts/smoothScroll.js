import $ from '../local_modules/jquery/dist/jquery.min';
import { DOM, DATA_ATTR } from './constants';

function smoothScroll() {
  $(DATA_ATTR.scroll).on('click', function (e) {
    const href = $(this).attr('href');
    const stickyHeaderHeight = 70;

    if (this.hash !== '' && this.pathname === window.location.pathname) {
      $(DOM.html, DOM.body).animate(
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
