import Spoiler from './spoiler';
import { DOM } from '../constants';

const spoilerOnetime = new Spoiler(DOM.detailsOnetime, [
  {
    spoiler: DOM.detailsOnetimeLegal,
    spoilerContent: DOM.serviceOnetimeLegal
  },
  {
    spoiler: DOM.detailsOnetimeIndivid,
    spoilerContent: DOM.serviceOnetimeIndivid
  }
]);

spoilerOnetime.init();

export default spoilerOnetime;
