export function swapComboboxValues(selectors) {
  const btn = document.querySelector(selectors[0]);
  const comboboxOne = document.querySelector(selectors[1]);
  const comboboxTwo = document.querySelector(selectors[2]);

  btn.addEventListener('click', () => {
    const valueOne = comboboxOne.value;
    const valueTwo = comboboxTwo.value;

    comboboxOne.value = valueTwo;
    comboboxTwo.value = valueOne;
  });
}
