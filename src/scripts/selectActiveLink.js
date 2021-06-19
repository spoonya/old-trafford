export default function selectActiveLink() {
  const curLocation = window.location.href;
  const menuLinks = document.querySelectorAll('.header__menu a');

  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].href === curLocation) {
      menuLinks[i].classList.add('active');
    }
  }
}
