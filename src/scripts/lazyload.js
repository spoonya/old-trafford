import lozad from 'lozad';

const lazyLoadObserver = lozad('.lozad', {
  loaded(el) {
    el.classList.add('lozad--loaded');
  }
});

export default lazyLoadObserver;
