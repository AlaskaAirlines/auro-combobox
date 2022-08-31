export function focus(elem) {
  const focusExampleBtnElem = document.querySelector('#focusExampleBtn');

  focusExampleBtnElem.addEventListener('click', () => {
    elem.focus();
  })
}
