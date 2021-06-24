function validateEmail(email) {
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regex.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const regex =
    /(\+375)((\s(33|29|44|25|232)\s)|((33|29|44|25|232)))([0-9]{7})/g;

  return regex.test(String(phone));
}

export { validateEmail, validatePhone };
