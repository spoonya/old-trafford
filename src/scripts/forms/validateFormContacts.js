import { FORMS, FORM_ELEMENTS } from '../constants';
import Form from './form';

function validateFormContacts() {
  const form = new Form(FORMS.formContacts, FORM_ELEMENTS);

  form.validate({
    username: { isCheck: true },
    userPhone: { isCheck: true },
    userEmail: { isCheck: true, isRequired: true },
    userMessage: { isCheck: true, isRequired: true },
    userAgreement: { isCheck: false }
  });
}

export default validateFormContacts;
