setTimeout(() => {
  let elem = document.querySelector('auro-combobox#persistent');

  if (elem) {
    elem.addEventListener('addNewAddress', () => {
      console.warn('addNewAddress event fired');
      alert(`addNewAddress event fired`);
    });
  }
}, 1000);
