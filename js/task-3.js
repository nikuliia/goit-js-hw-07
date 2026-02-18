const userInput = document.querySelector('#name-input');
console.log(userInput);

const userNameElem = document.querySelector('#name-output');
console.log(userNameElem);

userInput.addEventListener('input', handleUserInput);

function handleUserInput(e) {
  const value = userInput.value.trim();
  //   if (value !== '') {
  //     userNameElem.textContent = value;
  //   } else {
  //     userNameElem.textContent = 'Anonymous';
  //   }
  userNameElem.textContent = value || 'Anonymous';
}
