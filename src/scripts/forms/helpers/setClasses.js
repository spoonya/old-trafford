import { CLASSES } from '../constants';

function selectFormControl(input) {
  return input.closest(CLASSES.formControlEl);
}

function setError(input, message) {
  const formControl = selectFormControl(input);
  const error = formControl.querySelector(CLASSES.errorEl);

  error.textContent = message;
  formControl.classList.remove(CLASSES.success);
  formControl.classList.add(CLASSES.error);
}

function setSuccess(input) {
  const formControl = selectFormControl(input);

  formControl.classList.remove(CLASSES.error);
  formControl.classList.add(CLASSES.success);
}

export { setError, setSuccess };
