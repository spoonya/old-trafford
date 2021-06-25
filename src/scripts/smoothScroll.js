import $ from '../local_modules/jquery/dist/jquery.min';

function smoothScroll() {
  $('.header__menu a').on('click', function (e) {
    const href = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(href).offset().top
      },
      '300'
    );

    e.preventDefault();
  });
}

export default smoothScroll;
