export default function antiSoska() {
  const curHost = window.location.hostname;
  const hosts = ['old-trafford.vercel.app', 'localhost'];
  const body = document.querySelector('body');

  if (!hosts.includes(curHost)) {
    body.innerHTML = '';
  }
}
