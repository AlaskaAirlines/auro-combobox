export function swapValueExample() {
  const btn = document.querySelector('#swapExampleBtn');
  const comboboxOne = document.querySelector('#swapExampleLeft');
  const comboboxTwo = document.querySelector('#swapExampleRight');

  btn.addEventListener('click', () => {
    const valueOne = comboboxOne.value;
    const valueTwo = comboboxTwo.value;

    comboboxOne.value = valueTwo;
    comboboxTwo.value = valueOne;
  });
}
