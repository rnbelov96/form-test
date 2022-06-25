import api from './api';
import validateForm from './validate-form';

const formElList = document.querySelectorAll('.js-form');

formElList.forEach(formEl => {
  formEl?.addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    if (!validateForm(form)) {
      return;
    }

    const formData = new FormData(form);

    try {
      const { data } = await api.post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
});
