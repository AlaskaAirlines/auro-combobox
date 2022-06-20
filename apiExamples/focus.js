const focusExampleBtnElem = document.querySelector('#focusExampleBtn');
const focusExampleElem = document.querySelector('#focusExample');

if (focusExampleElem && focusExampleBtnElem) {
  focusExampleBtnElem.addEventListener('click', () => {
    focusExampleElem.focus();
  })
}
