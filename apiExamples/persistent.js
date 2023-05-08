export function persistentExample() {
  const persistentExample = document.querySelector('#persistent');

  persistentExample.addEventListener('addNewAddress', () => {
    console.warn('addNewAddress event fired');
    alert(`addNewAddress event fired`);
  });
}
