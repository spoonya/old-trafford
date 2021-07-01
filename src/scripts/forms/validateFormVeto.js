import { FORMS, FORM_ELEMENTS } from '../constants';
import Form from './form';

function validateFormVeto() {
  const form = new Form(FORMS.formVeto, FORM_ELEMENTS);

  form.validate({
    username: { isCheck: true },
    userPhone: { isCheck: true },
    userEmail: { isCheck: true, isRequired: false },
    userMessage: { isCheck: true, isRequired: false },
    userAgreement: { isCheck: false }
  });
}

export default validateFormVeto;
