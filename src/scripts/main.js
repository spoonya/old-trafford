import smoothscroll from 'smoothscroll-polyfill';

import lazyLoadObserver from './lazyload';

import { addResizeEvtListener } from './helpers';

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
import observeForFadeIn from './fadeIn';
import addEventsForLazyMap from './map';

import drawDecorator from './costDecorator';

smoothscroll.polyfill();

lazyLoadObserver.observe();

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

addEventsForLazyMap();

addResizeEvtListener([
  removeBurgerOnMedia,
  relocateElements,
  drawDecorator,
  observeForFadeIn,
  spoilerDescrip.controlSpoiler.bind(spoilerDescrip),
  spoilerCompany.controlSpoiler.bind(spoilerCompany)
]);
