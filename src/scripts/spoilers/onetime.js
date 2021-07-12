import Spoiler from './spoiler';
import { DOM } from '../constants';

const spoilerOnetime = new Spoiler(
  DOM.detailsOnetime,
  [
    {
      spoiler: DOM.detailsOnetimeLegal,
      spoilerContent: DOM.serviceOnetimeLegal
    },
    {
      spoiler: DOM.detailsOnetimeIndivid,
      spoilerContent: DOM.serviceOnetimeIndivid
    }
  ],
  true
);

spoilerOnetime.init();

export default spoilerOnetime;
