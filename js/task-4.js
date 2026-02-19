const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue !== '' && passwordValue !== '') {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    form.reset();
    console.log(formData);
  } else {
    alert('All form fields must be filled in');
  }
});
