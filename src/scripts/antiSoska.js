import { DOM_ELEMENTS } from './constants';

export default function antiSoska() {
  const curHost = window.location.hostname;
  const hosts = ['old-trafford.vercel.app', 'localhost'];

  if (!hosts.includes(curHost)) {
    DOM_ELEMENTS.body.innerHTML = '';
  }
}
