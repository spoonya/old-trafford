import {
  checkUsername,
  checkUserPhone,
  checkAgreement
} from './helpers/checkInputs';
import { FORM_MODAL_ELEMENTS, FORMS } from '../constants';

function validateFormModal() {
  if (!FORMS.formModal) return;

  FORMS.formModal.addEventListener('submit', (e) => {
    e.preventDefault();

    checkUsername(
      FORM_MODAL_ELEMENTS.username,
      FORM_MODAL_ELEMENTS.username.value.trim()
    );

    checkUserPhone(
      FORM_MODAL_ELEMENTS.userPhone,
      FORM_MODAL_ELEMENTS.userPhone.value.trim()
    );

    checkAgreement(FORM_MODAL_ELEMENTS.userAgreement);
  });
}

export default validateFormModal;
