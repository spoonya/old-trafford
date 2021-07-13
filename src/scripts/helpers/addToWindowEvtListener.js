function addResizeEvtListener(funcArray) {
  window.addEventListener('resize', () => {
    setTimeout(() => {
      funcArray.forEach((func) => func());
    }, 100);
  });
}

export default addResizeEvtListener;
