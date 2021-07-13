import isMediaBreakpoint from './isMedia';

let isOnMedia = false;

function isOnMediaTabletLgBefore() {
  if (isMediaBreakpoint(991.98) && isOnMedia) return true;

  if (isMediaBreakpoint(991.98)) {
    isOnMedia = true;

    return false;
  }

  isOnMedia = false;

  return false;
}

export default isOnMediaTabletLgBefore;
