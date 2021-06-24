const CLASSES = {
  success: 'success',
  error: 'error',
  errorEl: '.form__error',
  formControlEl: '.form__control'
};

const ERRORS = {
  emptyName: 'Имя не может быть пустым',
  emptyPhone: 'Телефон не может быть пустым',
  emptyEmail: 'E-mail не может быть пустым',
  emptyMsg: 'Сообщение не может быть пустым',
  invalidEmail: 'Некорректный E-mail',
  invalidPhone: 'Некорректный телефон',
  maxMessageLength: 'Сообщение не может превышать 250 символов',
  minMessageLength: 'Сообщение должо содержать не менее 16 символов'
};

const FORM_ELEMENTS = {
  username: document.querySelector('#form-name'),
  userPhone: document.querySelector('#form-phone'),
  userEmail: document.querySelector('#form-email'),
  userMsg: document.querySelector('#form-message')
};

const FORMS = {
  formVeto: document.querySelector('#law-form'),
  formContacts: document.querySelector('#contacts-form')
};

export { CLASSES, ERRORS, FORM_ELEMENTS, FORMS };
