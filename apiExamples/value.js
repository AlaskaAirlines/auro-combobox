setTimeout(() => {
  const valueValidExampleBtnElem = document.querySelector('#valueValidExampleBtn');
  const valueInvalidExampleBtnElem = document.querySelector('#valueInvalidExampleBtn')
  const valueUndefinedExampleBtnElem = document.querySelector('#valueUndefinedExampleBtn')
  const valueExampleElem = document.querySelector('#valueExample');

  if (valueExampleElem && valueValidExampleBtnElem) {
    valueValidExampleBtnElem.addEventListener('click', () => {
      valueExampleElem.value = 'Oranges';
    })
  }

  if (valueExampleElem && valueInvalidExampleBtnElem) {
    valueInvalidExampleBtnElem.addEventListener('click', () => {
      valueExampleElem.value = 'Dragon Fruit';
    })
  }

  if (valueExampleElem && valueUndefinedExampleBtnElem) {
    valueUndefinedExampleBtnElem.addEventListener('click', () => {
      valueExampleElem.value = undefined;
    })
  }
}, 200)

