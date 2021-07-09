// eslint-disable-next-line no-unused-vars
import * as sliders from './sliders';

import { addToWindowEvtListener } from './helpers';

import { spoilerDescrip, spoilerCompany } from './spoilers';

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

import { removeBurgerOnMedia } from './header/burger';

import relocateElements from './relocateElements';

import controlModal from './modal';
import smoothScroll from './smoothScroll';
import antiSoska from './antiSoska';

controlHeaderAdaptive();
lockHeader();
selectActiveMenuLink();

validateFormVeto();
validateFormContacts();
validateFormModal();

relocateElements();

controlModal();

smoothScroll();

addToWindowEvtListener('resize', [
  removeBurgerOnMedia,
  relocateElements,
  spoilerDescrip.controlSpoiler.bind(spoilerDescrip),
  spoilerCompany.controlSpoiler.bind(spoilerCompany)
]);

antiSoska();
