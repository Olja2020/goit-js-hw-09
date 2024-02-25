const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const emailForm = form.elements.email;
const localStorageKey = 'feedback-form-state';

textarea.value = localStorage.getItem(localStorageKey) ?? '';
emailForm.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (
    evt.target.elements.message.value !== '' &&
    evt.target.elements.email.value !== ''
  ) {
    console.log(
      evt,
      evt.target.elements.message.value,
      evt.target.elements.email.value
    );
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill in all the fields!');
  }
});
