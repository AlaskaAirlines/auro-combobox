const btn = document.querySelector('#swapExampleBtn');
const comboboxOne = document.querySelector('#swapExampleLeft');
const comboboxTwo = document.querySelector('#swapExampleRight');

console.log("hello");
console.log(btn);

btn.addEventListener('click', () => {
  console.log("btn clicked");
  const valueOne = comboboxOne.value;
  const valueTwo = comboboxTwo.value;

  comboboxOne.value = valueTwo;
  comboboxTwo.value = valueOne;
});
