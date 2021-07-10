import $ from '../local_modules/jquery/dist/jquery.min';

function drawDecorator() {
  $('.cost__item').each(function () {
    const text = $(this).children('.cost__txt').text();
    const newInnerHtml = `${text.slice(
      0,
      -1
    )}<span class="lastchar">${text.slice(-1)}</span>`;

    $(this).children('.cost__txt').html(newInnerHtml);

    const lastChar = $(this).children('.cost__txt').children('.lastchar');
    const decorator = $(this).children('.cost__decorator');
    const price = $(this).children('.cost__price');
    const gap = 20;

    const lastCharPos = lastChar.position();
    const pricePos = price.position();

    const decoratorWidth = pricePos.left - lastCharPos.left - gap * 2;

    decorator.css({
      top: `${lastCharPos.top + lastChar.height() - decorator.height() * 2}px`,
      left: `${lastCharPos.left + gap}px`,
      width: `${decoratorWidth}px`
    });
  });
}

export default drawDecorator;
