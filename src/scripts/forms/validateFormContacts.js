import { FORMS, FORM_ELEMENTS } from '../constants';
import FormValidation from './form';

function validateFormContacts() {
  const form = new FormValidation(FORMS.formContacts, FORM_ELEMENTS);

  form.validateOnSubmit({
    username: { isCheck: true },
    userPhone: { isCheck: true },
    userEmail: { isCheck: true, isRequired: true },
    userMessage: { isCheck: true, isRequired: true },
    userAgreement: { isCheck: false }
  });
}

export default validateFormContacts;
