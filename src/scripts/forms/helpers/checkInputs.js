import { setError, setSuccess } from './setClasses';
import { validateEmail, validatePhone } from './validate';
import { ERRORS } from '../constants';

function checkUsername(username, usernameValue) {
  if (!usernameValue) {
    setError(username, ERRORS.emptyName);
  } else {
    setSuccess(username);
  }
}

function checkUserPhone(userPhone, userPhoneValue) {
  if (!userPhoneValue) {
    setError(userPhone, ERRORS.emptyPhone);

    return;
  }

  if (userPhoneValue && !validatePhone(userPhoneValue)) {
    setError(userPhone, ERRORS.invalidPhone);
  } else {
    setSuccess(userPhone);
  }
}

function checkUserEmail(userEmail, userEmailValue, isRequired = false) {
  if (isRequired && !userEmailValue) {
    setError(userEmail, ERRORS.emptyEmail);

    return;
  }

  if (userEmailValue && !validateEmail(userEmailValue)) {
    setError(userEmail, ERRORS.invalidEmail);
  } else {
    setSuccess(userEmail);
  }
}

function checkUserMessage(userMessage, userMessageValue, isRequired = false) {
  const maxMessageLength = 250;
  const minMessageLength = 16;

  if (isRequired && !userMessageValue) {
    setError(userMessage, ERRORS.emptyMsg);

    return;
  }

  if (userMessageValue.length && userMessageValue.length > maxMessageLength) {
    setError(userMessage, ERRORS.maxMessageLength);

    return;
  }

  if (userMessageValue.length && userMessageValue.length < minMessageLength) {
    setError(userMessage, ERRORS.minMessageLength);
  } else {
    setSuccess(userMessage);
  }
}

export { checkUsername, checkUserPhone, checkUserEmail, checkUserMessage };
