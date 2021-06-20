const formVeta = document.querySelector('#law-form');
const username = document.querySelector('#law-form-name');
const userPhone = document.querySelector('#law-form-phone');
const userEmail = document.querySelector('#law-form-email');
const userMessage = document.querySelector('#law-form-message');

const classes = {
  success: 'success',
  error: 'error',
  errorEl: '.law__form-error',
  formControlEl: '.law__form-control'
};

const errors = {
  emptyName: 'Имя не может быть пустым',
  emptyPhone: 'Телефон не может быть пустым',
  invalidEmail: 'Некорректный E-mail',
  invalidPhone: 'Некорректный телефон',
  maxMessageLength: 'Сообщение не может превышать 250 символов',
  minMessageLength: 'Сообщение должо содержать не менее 16 символов'
};

function selectFormControl(input) {
  return input.closest(classes.formControlEl);
}

function setError(input, message) {
  const formControl = selectFormControl(input);
  const error = formControl.querySelector(classes.errorEl);

  error.textContent = message;
  formControl.classList.remove(classes.success);
  formControl.classList.add(classes.error);
}

function setSuccess(input) {
  const formControl = selectFormControl(input);

  formControl.classList.remove(classes.error);
  formControl.classList.add(classes.success);
}

function validateEmail(email) {
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regex.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const regex =
    /(\+375)((\s(33|29|44|25|232)\s)|((33|29|44|25|232)))([0-9]{7})/g;

  return regex.test(String(phone));
}

function checkUsername(usernameValue) {
  if (!usernameValue) {
    setError(username, errors.emptyName);
  } else {
    setSuccess(username);
  }
}

function checkUserPhone(userPhoneValue) {
  if (!userPhoneValue) {
    setError(userPhone, errors.emptyPhone);
  } else if (userPhoneValue && !validatePhone(userPhoneValue)) {
    setError(userPhone, errors.invalidPhone);
  } else {
    setSuccess(userPhone);
  }
}

function checkUserEmail(userEmailValue) {
  if (userEmailValue && !validateEmail(userEmailValue)) {
    setError(userEmail, errors.invalidEmail);
  } else {
    setSuccess(userEmail);
  }
}

function checkUserMessage(userMessageValue) {
  const maxMessageLength = 250;
  const minMessageLength = 16;

  if (userMessageValue.length && userMessageValue.length > maxMessageLength) {
    setError(userMessage, errors.maxMessageLength);
  } else if (
    userMessageValue.length &&
    userMessageValue.length < minMessageLength
  ) {
    setError(userMessage, errors.minMessageLength);
  } else {
    setSuccess(userMessage);
  }
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const userPhoneValue = userPhone.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userMessageValue = userMessage.value.trim();

  checkUsername(usernameValue);
  checkUserPhone(userPhoneValue);
  checkUserEmail(userEmailValue);
  checkUserMessage(userMessageValue);
}

function validateFormVeta() {
  if (!formVeta) return;

  formVeta.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
  });
}

export default validateFormVeta;
