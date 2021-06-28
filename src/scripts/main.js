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

controlHeaderAdaptive();
lockHeader();
selectActiveMenuLink();

validateFormVeto();
validateFormContacts();
validateFormModal();

controlModal();

smoothScroll();

antiSoska();
