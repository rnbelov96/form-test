import IMask from 'imask';

const formsList = document.querySelectorAll('form');

formsList.forEach(form => {
  const nameInputEl = form.querySelector(
    '[data-input="name"]',
  ) as HTMLInputElement;
  const phoneInputEl = form.querySelector(
    '[data-input="phone"]',
  ) as HTMLInputElement;
  const emailInputEl = form.querySelector(
    '[data-input="email"]',
  ) as HTMLInputElement;

  const fileInputEl = form.querySelector(
    '[data-input="file"]',
  ) as HTMLInputElement;
  const fileNameLabelEl = form.querySelector(
    '.js-file-name-label',
  ) as HTMLParagraphElement;
  const fileBoxEl = form.querySelector('.js-file-box') as HTMLDivElement;
  const fileDeleteBtnEl = form.querySelector(
    '.js-file-delete-btn',
  ) as HTMLButtonElement;

  fileInputEl.addEventListener('input', e => {
    const inputEl = e.currentTarget as HTMLInputElement;
    if (inputEl.files) {
      fileBoxEl.classList.toggle('form__attach-file-box_hidden');
      fileNameLabelEl.textContent = inputEl.files[0].name;
    }
  });
  fileDeleteBtnEl.addEventListener('click', () => {
    fileBoxEl.classList.toggle('form__attach-file-box_hidden');
    fileInputEl.value = '';
    fileNameLabelEl.textContent = '';
  });

  let phoneMask: any;

  phoneInputEl?.addEventListener('focus', () => {
    if (!phoneMask || phoneMask.unmaskedValue === '') {
      phoneMask = IMask(phoneInputEl, {
        mask: '+7 (000) 000-00-00',
        lazy: false,
      });
      phoneInputEl.selectionStart = 4;
      phoneInputEl.selectionEnd = 4;
    }
    const stringEnd = phoneInputEl.value.indexOf('_');
    phoneInputEl.selectionStart = stringEnd;
    phoneInputEl.selectionEnd = stringEnd;
  });
  phoneInputEl?.addEventListener('blur', e => {
    const inputEl = e.currentTarget as HTMLInputElement;
    if (phoneMask.unmaskedValue === '') {
      phoneMask.destroy();
      inputEl.value = '';
    }
  });

  const onFocus = (e: Event) => {
    const targerEl = e.currentTarget as HTMLInputElement;
    targerEl.classList.remove('form__input_error');
  };

  nameInputEl?.addEventListener('focus', onFocus);
  phoneInputEl?.addEventListener('focus', onFocus);
  emailInputEl?.addEventListener('focus', onFocus);
});
