/* eslint-disable camelcase */
import { isMobile, isMediaBreakpoint } from './helpers';
import { DOM } from './constants';

function setCenter(address) {
  const centerMobile = address;
  const centerDesktop = [53.8978, 27.56];

  if (isMediaBreakpoint()) {
    return centerMobile;
  }

  return centerDesktop;
}

function initMap() {
  if (!DOM.map) return;

  const address = [53.897626, 27.565856];

  const map = new ymaps.Map(
    'map',
    {
      center: setCenter(address),
      zoom: 16
    },
    { yandexMapDisablePoiInteractivity: true }
  );

  window.addEventListener('resize', () => {
    map.setCenter(setCenter(address));
  });

  map.geoObjects.add(
    new ymaps.Placemark(
      address,
      {
        iconCaption: 'ОлдТраффорд',
        balloonContent: 'Минск, ул. Энгельса, дом 34, офис 305'
      },
      {
        preset: 'islands#redPocketIcon'
      }
    )
  );

  if (isMobile()) map.behaviors.disable('drag');
  map.behaviors.disable('scrollZoom');

  map.controls.remove('searchControl');
  map.controls.remove('rulerControl');
  map.controls.remove('geolocationControl');
}

let map_loaded = false;

function loadMapLazy() {
  if (!map_loaded) {
    map_loaded = true;

    ymaps.ready(initMap);
  }
}

const optionsMap = {
  once: true,
  passive: true,
  capture: true
};

function addEventsForLazyMap() {
  if (!DOM.map) return;

  DOM.map.addEventListener('click', loadMapLazy, optionsMap);
  DOM.map.addEventListener('mouseover', loadMapLazy, optionsMap);
  DOM.map.addEventListener('touchstart', loadMapLazy, optionsMap);
  DOM.map.addEventListener('touchmove', loadMapLazy, optionsMap);
}

export default addEventsForLazyMap;
