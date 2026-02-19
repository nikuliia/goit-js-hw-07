const form = document.querySelector('.js-form');
const formBtn = document.querySelector('.js-btn');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue !== '' && passwordValue !== '') {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formData);
  } else {
    alert('All form fields must be filled in');
  }

  form.reset();
});
