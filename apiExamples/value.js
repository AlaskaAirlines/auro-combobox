export function initValueExamples(elem) {
  document.querySelector('#valueValidExampleBtn').addEventListener('click', () => {
    elem.value = 'Oranges';
  })

  document.querySelector('#valueInvalidExampleBtn').addEventListener('click', () => {
    console.warn('dragon fruit', elem);
    elem.value = 'Dragon Fruit';
  })

  document.querySelector('#valueUndefinedExampleBtn').addEventListener('click', () => {
    elem.value = undefined;
  })
}
