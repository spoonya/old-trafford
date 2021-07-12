// eslint-disable-next-line no-unused-vars
import * as sliders from './sliders';

import { addToWindowEvtListener } from './helpers';

import {
  spoilerDescrip,
  spoilerCompany,
  spoilerContacts,
  spoilerOnetime
} from './spoilers';

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
import observeForFadeIn from './fadeIn';
import antiSoska from './antiSoska';
import initMap from './map';

import drawDecorator from './costDecorator';

controlHeaderAdaptive();
lockHeader();
selectActiveMenuLink();

validateFormVeto();
validateFormContacts();
validateFormModal();

relocateElements();

controlModal();

smoothScroll();

observeForFadeIn();

drawDecorator();

// eslint-disable-next-line no-undef
ymaps.ready(initMap);

addToWindowEvtListener('resize', [
  removeBurgerOnMedia,
  relocateElements,
  drawDecorator,
  observeForFadeIn,
  spoilerDescrip.controlSpoiler.bind(spoilerDescrip),
  spoilerCompany.controlSpoiler.bind(spoilerCompany),
  spoilerContacts.controlSpoiler.bind(spoilerContacts)
]);

antiSoska();
