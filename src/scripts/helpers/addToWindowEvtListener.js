function addToWindowEvtListener(evt, funcArray) {
  window.addEventListener(evt, () => {
    setTimeout(() => {
      funcArray.forEach((func) => func());
    }, 100);
  });
}

export default addToWindowEvtListener;
