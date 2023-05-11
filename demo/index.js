import { persistentExample } from '../apiExamples/persistent';
import { swapValueExample } from '../apiExamples/swapValue';

export function initComboboxIndexExamples() {
  // setTimeout handles issue where content is sometimes loaded after the functions get called
  setTimeout(() => {
    persistentExample();
    swapValueExample();
  }, 100);
}
