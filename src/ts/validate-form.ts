import validator from 'validator';

export default (form: HTMLFormElement) => {
  const nameInputEl = form.querySelector(
    '[data-input="name"]',
  ) as HTMLInputElement | null;
  const phoneInputEl = form.querySelector(
    '[data-input="phone"]',
  ) as HTMLInputElement | null;
  const emailInputEl = form.querySelector(
    '[data-input="email"]',
  ) as HTMLInputElement | null;

  let isOk = true;

  if (nameInputEl && nameInputEl.value === '') {
    nameInputEl.classList.add('form__input_error');
    isOk = false;
  }
  if (phoneInputEl && phoneInputEl.value === '') {
    phoneInputEl.classList.add('form__input_error');
    isOk = false;
  }
  if (emailInputEl && emailInputEl.value === '') {
    emailInputEl.classList.add('form__input_error');
    isOk = false;
  }

  if (
    phoneInputEl
    && phoneInputEl.value !== ''
    && !validator.isMobilePhone(
      `${phoneInputEl.value.replace(/\(|\)|-|_|\s/g, '')}`,
      'ru-RU',
    )
  ) {
    phoneInputEl.classList.add('form__input_error');
    isOk = false;
  }

  if (
    emailInputEl
    && emailInputEl.value !== ''
    && !validator.isEmail(emailInputEl.value)
  ) {
    emailInputEl.classList.add('form__input_error');
    isOk = false;
  }

  return isOk;
};
