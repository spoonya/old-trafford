export default function antiSoska() {
  const curHost = window.location.hostname;
  const hosts = ['old-trafford.vercel.app', 'localhost'];

  if (!hosts.includes(curHost)) {
    const body = document.querySelector('body');

    body.innerHTML = '';
  }
}
