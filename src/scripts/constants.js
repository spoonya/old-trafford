const CLASSES = {
  success: 'success',
  error: 'error',
  scrollHidden: 'scroll-hidden',
  active: 'active',
  modal: 'modal',
  errorEl: 'form__error',
  formControlEl: 'form__control'
};

const ERRORS = {
  emptyName: 'Имя не может быть пустым',
  emptyPhone: 'Телефон не может быть пустым',
  emptyEmail: 'E-mail не может быть пустым',
  emptyMsg: 'Сообщение не может быть пустым',
  invalidEmail: 'Некорректный E-mail',
  invalidPhone: 'Некорректный номер',
  unchecked: 'Поле должно быть отмечено',
  maxMessageLength: 'Сообщение не может превышать 250 символов',
  minMessageLength: 'Сообщение должо содержать не менее 16 символов'
};

const FORM_ELEMENTS = {
  username: document.querySelector('#form-name'),
  userPhone: document.querySelector('#form-phone'),
  userEmail: document.querySelector('#form-email'),
  userMsg: document.querySelector('#form-message')
};

const FORM_MODAL_ELEMENTS = {
  username: document.querySelector('#modal-form-name'),
  userPhone: document.querySelector('#modal-form-phone'),
  userAgreement: document.querySelector('#modal-form-agreement')
};

const FORMS = {
  formVeto: document.querySelector('#law-form'),
  formContacts: document.querySelector('#contacts-form'),
  formModal: document.querySelector('#modal-form')
};

const DOM_ELEMENTS = {
  menuLinks: [...document.querySelectorAll('.header__menu a')],
  header: document.querySelector('#header'),
  introSection: document.querySelector('#intro'),
  overlay: document.querySelector('#overlay'),
  body: document.querySelector('body'),
  html: document.querySelector('html')
};

const DATA_ATTR = {
  modal: '[data-modal-target]',
  modalClose: '[data-close-button]',
  scroll: '[data-scroll]'
};

export {
  CLASSES,
  ERRORS,
  FORM_ELEMENTS,
  FORM_MODAL_ELEMENTS,
  FORMS,
  DOM_ELEMENTS,
  DATA_ATTR
};
