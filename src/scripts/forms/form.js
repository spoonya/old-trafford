import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js';
import { ERRORS, CLASSES } from '../constants';

class Form {
  constructor(form, formElements) {
    this.form = form;
    this.formElements = formElements;
  }

  _validateEmail(email) {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return regex.test(String(email).toLowerCase());
  }

  _validatePhone(phoneNumber) {
    if (phoneNumber.split('')[0] !== '+') {
      phoneNumber = `+${phoneNumber}`;
    }

    const parsedPhoneNumber = parsePhoneNumber(phoneNumber);

    if (isValidPhoneNumber(phoneNumber, 'BY')) {
      this.formElements.userPhone.value = parsedPhoneNumber.format('E.164');

      return true;
    }

    return false;
  }

  _selectFormControl(input) {
    return input.closest(`.${CLASSES.formControlEl}`);
  }

  _setError(input, message) {
    const formControl = this._selectFormControl(input);
    const error = formControl.querySelector(`.${CLASSES.errorEl}`);

    error.textContent = message;
    formControl.classList.remove(CLASSES.success);
    formControl.classList.add(CLASSES.error);
  }

  _setSuccess(input) {
    const formControl = this._selectFormControl(input);

    formControl.classList.remove(CLASSES.error);
    formControl.classList.add(CLASSES.success);
  }

  _checkUsername(username, usernameValue) {
    if (!usernameValue) {
      this._setError(username, ERRORS.emptyName);
    } else {
      this._setSuccess(username);
    }
  }

  _checkUserPhone(userPhone, userPhoneValue) {
    if (!userPhoneValue) {
      this._setError(userPhone, ERRORS.emptyPhone);

      return;
    }

    if (userPhoneValue && !this._validatePhone(userPhoneValue)) {
      this._setError(userPhone, ERRORS.invalidPhone);
    } else {
      this._setSuccess(userPhone);
    }
  }

  _checkUserEmail(userEmail, userEmailValue, isRequired = false) {
    if (isRequired && !userEmailValue) {
      this._setError(userEmail, ERRORS.emptyEmail);

      return;
    }

    if (userEmailValue && !this._validateEmail(userEmailValue)) {
      this._setError(userEmail, ERRORS.invalidEmail);
    } else {
      this._setSuccess(userEmail);
    }
  }

  _checkUserMessage(userMessage, userMessageValue, isRequired = false) {
    const maxMessageLength = 250;
    const minMessageLength = 16;

    if (isRequired && !userMessageValue) {
      this._setError(userMessage, ERRORS.emptyMsg);

      return;
    }

    if (userMessageValue.length && userMessageValue.length > maxMessageLength) {
      this._setError(userMessage, ERRORS.maxMessageLength);

      return;
    }

    if (userMessageValue.length && userMessageValue.length < minMessageLength) {
      this._setError(userMessage, ERRORS.minMessageLength);

      return;
    }

    this._setSuccess(userMessage);
  }

  _checkAgreement(checkbox) {
    if (!checkbox.checked) {
      this._setError(checkbox, ERRORS.unchecked);
    } else {
      this._setSuccess(checkbox);
    }
  }

  validate(config) {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (config.username.isCheck) {
        this._checkUsername(
          this.formElements.username,
          this.formElements.username.value.trim()
        );
      }

      if (config.userPhone.isCheck) {
        this._checkUserPhone(
          this.formElements.userPhone,
          this.formElements.userPhone.value.trim()
        );
      }

      if (config.userEmail.isCheck) {
        this._checkUserEmail(
          this.formElements.userEmail,
          this.formElements.userEmail.value.trim(),
          config.userEmail.isRequired
        );
      }

      if (config.userMessage.isCheck)
        this._checkUserMessage(
          this.formElements.userMsg,
          this.formElements.userMsg.value.trim(),
          config.userMessage.isRequired
        );

      if (config.userAgreement.isCheck) {
        this._checkAgreement(this.formElements.userAgreement);
      }
    });
  }
}

export default Form;
