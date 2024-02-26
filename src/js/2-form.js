
 const form = document.querySelector('.feedback-form');


  const localStorageKey = 'feedback-form-state';

  form.addEventListener('input', () => {
    const data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(data));
});


 let getData = JSON.parse(localStorage.getItem(localStorageKey));

 if (getData) {
  
  form.elements.email.value  = getData.email;
  form.elements.message.value = getData.message;
  
 }
 
form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (
    evt.target.elements.message.value !== '' &&
    evt.target.elements.email.value !== ''
  ) {
    console.log(
      {email: evt.target.elements.email.value,
      message: evt.target.elements.message.value,}
    );
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill in all the fields!');
  }
});

