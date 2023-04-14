const persistentExample = document.querySelector('#persistent');

console.log(persistentExample);

persistentExample.addEventListener('addNewAddress', () => {
  console.warn('addNewAddress event fired');
  alert(`addNewAddress event fired`);
});
