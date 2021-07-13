import isMediaBreakpoint from './isMedia';

let isOnMedia = false;

function isOnMediaTabletSmBefore() {
  if (isMediaBreakpoint(767.98) && isOnMedia) return true;

  if (isMediaBreakpoint(767.98)) {
    isOnMedia = true;

    return false;
  }

  isOnMedia = false;

  return false;
}

export default isOnMediaTabletSmBefore;
