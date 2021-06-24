import {
  checkUsername,
  checkUserPhone,
  checkUserEmail,
  checkUserMessage
} from './helpers/checkInputs';
import { FORM_ELEMENTS, FORMS } from './constants';

function validateFormContacts() {
  if (!FORMS.formContacts) return;

  FORMS.formContacts.addEventListener('submit', (e) => {
    e.preventDefault();

    checkUsername(FORM_ELEMENTS.username, FORM_ELEMENTS.username.value.trim());
    checkUserPhone(
      FORM_ELEMENTS.userPhone,
      FORM_ELEMENTS.userPhone.value.trim()
    );
    checkUserEmail(
      FORM_ELEMENTS.userEmail,
      FORM_ELEMENTS.userEmail.value.trim(),
      true
    );
    checkUserMessage(
      FORM_ELEMENTS.userMsg,
      FORM_ELEMENTS.userMsg.value.trim(),
      true
    );
  });
}

export default validateFormContacts;
