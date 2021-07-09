import { LOCATION } from '../constants';

function isIndexPage() {
  if (
    LOCATION.curLocation === LOCATION.origin ||
    LOCATION.curPathName === LOCATION.indexPathName
  ) {
    return true;
  }

  return false;
}

export default isIndexPage;
