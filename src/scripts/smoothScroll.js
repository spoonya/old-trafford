import $ from '../local_modules/jquery/dist/jquery.min';
import { DOM_ELEMENTS } from './constants';

function smoothScroll() {
  $('.header__menu a').on('click', function (e) {
    const href = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(href).offset().top - DOM_ELEMENTS.header.offsetHeight
      },
      '300'
    );

    e.preventDefault();
  });
}

export default smoothScroll;
