export default function selectMenuActiveLink() {
  const curLocation = window.location.href;
  const origin = `${window.location.origin}/`;
  const menuLinks = document.querySelectorAll('.header__menu a');

  for (let i = 0; i < menuLinks.length; i++) {
    if (curLocation === origin) {
      menuLinks[0].classList.add('active');
      return;
    }

    if (menuLinks[i].href === curLocation) {
      menuLinks[i].classList.add('active');
    }
  }
}
