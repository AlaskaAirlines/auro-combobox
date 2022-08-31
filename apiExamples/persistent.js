export function persistentEventOption(elem) {
  elem.addEventListener('addNewAddress', () => {
    console.warn('addNewAddress event fired');
    alert(`addNewAddress event fired`);
  });
}
