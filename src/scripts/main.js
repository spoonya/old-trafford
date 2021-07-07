import initSwiper from './sliders';

import {
  validateFormContacts,
  validateFormModal,
  validateFormVeto
} from './forms';

import {
  selectActiveMenuLink,
  lockHeader,
  controlHeaderAdaptive
} from './header';

import controlModal from './modal';
import smoothScroll from './smoothScroll';
import antiSoska from './antiSoska';

initSwiper();

controlHeaderAdaptive();
lockHeader();
selectActiveMenuLink();

validateFormVeto();
validateFormContacts();
validateFormModal();

controlModal();

smoothScroll();

antiSoska();
