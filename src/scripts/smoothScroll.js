import $ from '../local_modules/jquery/dist/jquery.min';
import { DOM_ELEMENTS, DATA_ATTR, LOCATION } from './constants';
import { isIndexPage } from './helpers';

function smoothScroll() {
  $(DATA_ATTR.scroll).on('click', function (e) {
    if (isIndexPage()) {
      this.href = this.hash;
    } else {
      this.href = `${LOCATION.indexPathName}${this.hash}`;
    }

    const href = $(this).attr('href');
    const stickyHeaderHeight = 70;

    if (this.hash !== '' && this.pathname === window.location.pathname) {
      $(DOM_ELEMENTS.html, DOM_ELEMENTS.body).animate(
        {
          scrollTop:
            $(href).offset().top -
            (DOM_ELEMENTS.header.offsetHeight + stickyHeaderHeight)
        },
        '300'
      );

      e.preventDefault();
    }
  });
}

export default smoothScroll;
