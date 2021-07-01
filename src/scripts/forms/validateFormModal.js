import { FORMS, FORM_MODAL_ELEMENTS } from '../constants';
import Form from './form';

function validateFormModal() {
  const form = new Form(FORMS.formModal, FORM_MODAL_ELEMENTS);

  form.validate({
    username: { isCheck: true },
    userPhone: { isCheck: true },
    userEmail: { isCheck: false },
    userMessage: { isCheck: false },
    userAgreement: { isCheck: true }
  });
}

export default validateFormModal;
