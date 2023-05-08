import { persistentExample } from '../apiExamples/persistent';
import { swapValueExample } from '../apiExamples/swapValue';

export function initComboboxIndexExamples() {
  setTimeout(() => {
    persistentExample();
    swapValueExample();
  }, 100);
}
