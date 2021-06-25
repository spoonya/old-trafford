import {
  checkUsername,
  checkUserPhone,
  checkUserEmail,
  checkUserMessage
} from './helpers/checkInputs';
import { FORM_ELEMENTS, FORMS } from '../constants';

function validateFormVeto() {
  if (!FORMS.formVeto) return;

  FORMS.formVeto.addEventListener('submit', (e) => {
    e.preventDefault();

    checkUsername(FORM_ELEMENTS.username, FORM_ELEMENTS.username.value.trim());

    checkUserPhone(
      FORM_ELEMENTS.userPhone,
      FORM_ELEMENTS.userPhone.value.trim()
    );

    checkUserEmail(
      FORM_ELEMENTS.userEmail,
      FORM_ELEMENTS.userEmail.value.trim()
    );

    checkUserMessage(FORM_ELEMENTS.userMsg, FORM_ELEMENTS.userMsg.value.trim());
  });
}

export default validateFormVeto;
