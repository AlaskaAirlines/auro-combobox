export function valueExample() {
  const valueExample = document.querySelector('#valueExample');

  document.querySelector('#valueValidExampleBtn').addEventListener('click', () => {
    valueExample.value = 'Oranges';
  });

  document.querySelector('#valueInvalidExampleBtn').addEventListener('click', () => {
    valueExample.value = 'Dragon Fruit';
  });

  document.querySelector('#valueUndefinedExampleBtn').addEventListener('click', () => {
    valueExample.value = undefined;
  });
}
