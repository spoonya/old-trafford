import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js';
import Swal from 'sweetalert2';
import { ERRORS, CLASSES } from '../constants';
import { closeModal } from '../modal';

class FormValidation {
  constructor(form, formElements, isModal = false) {
    this.form = form;
    this.formElements = formElements;
    this.isModal = isModal;
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

      return false;
    }

    this._setSuccess(username);

    return true;
  }

  _checkUserPhone(userPhone, userPhoneValue) {
    if (!userPhoneValue) {
      this._setError(userPhone, ERRORS.emptyPhone);

      return false;
    }

    if (userPhoneValue && !this._validatePhone(userPhoneValue)) {
      this._setError(userPhone, ERRORS.invalidPhone);

      return false;
    }

    this._setSuccess(userPhone);

    return true;
  }

  _checkUserEmail(userEmail, userEmailValue, isRequired = false) {
    if (isRequired && !userEmailValue) {
      this._setError(userEmail, ERRORS.emptyEmail);

      return false;
    }

    if (userEmailValue && !this._validateEmail(userEmailValue)) {
      this._setError(userEmail, ERRORS.invalidEmail);

      return false;
    }

    this._setSuccess(userEmail);

    return true;
  }

  _checkUserMessage(userMessage, userMessageValue, isRequired = false) {
    const maxMessageLength = 250;
    const minMessageLength = 16;

    if (isRequired && !userMessageValue) {
      this._setError(userMessage, ERRORS.emptyMsg);

      return false;
    }

    if (userMessageValue.length && userMessageValue.length > maxMessageLength) {
      this._setError(userMessage, ERRORS.maxMessageLength);

      return false;
    }

    if (userMessageValue.length && userMessageValue.length < minMessageLength) {
      this._setError(userMessage, ERRORS.minMessageLength);

      return false;
    }

    this._setSuccess(userMessage);

    return true;
  }

  _checkAgreement(checkbox) {
    if (!checkbox.checked) {
      this._setError(checkbox, ERRORS.unchecked);

      return false;
    }

    this._setSuccess(checkbox);

    return true;
  }

  _showAlert() {
    Swal.fire({
      text: 'Ваша заявка успешно отправлена',
      icon: 'success',
      confirmButtonText: 'ок'
    });
  }

  _clearInputs() {
    Object.values(this.formElements).forEach((input) => {
      input.value = '';

      if (input.type === 'checkbox') {
        input.checked = false;
      }

      this._selectFormControl(input).classList.remove(
        CLASSES.success,
        CLASSES.error
      );
    });
  }

  validateOnSubmit(config) {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      const isValid = [];

      if (config.username.isCheck) {
        isValid.push(
          this._checkUsername(
            this.formElements.username,
            this.formElements.username.value.trim()
          )
        );
      }

      if (config.userPhone.isCheck) {
        isValid.push(
          this._checkUserPhone(
            this.formElements.userPhone,
            this.formElements.userPhone.value.trim()
          )
        );
      }

      if (config.userEmail.isCheck) {
        isValid.push(
          this._checkUserEmail(
            this.formElements.userEmail,
            this.formElements.userEmail.value.trim(),
            config.userEmail.isRequired
          )
        );
      }

      if (config.userMessage.isCheck)
        isValid.push(
          this._checkUserMessage(
            this.formElements.userMsg,
            this.formElements.userMsg.value.trim(),
            config.userMessage.isRequired
          )
        );

      if (config.userAgreement.isCheck) {
        isValid.push(this._checkAgreement(this.formElements.userAgreement));
      }

      if (isValid.includes(false)) {
        e.preventDefault();

        return;
      }

      this._showAlert();
      this._clearInputs();

      if (this.isModal) {
        closeModal(e.target.closest(`.${CLASSES.modal}`));
      }
    });
  }
}

export default FormValidation;
