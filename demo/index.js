import { persistentExample } from '../apiExamples/persistent';
import { swapValueExample } from '../apiExamples/swapValue';

export function initComboboxIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    persistentExample();
    swapValueExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initComboboxIndexExamples(initCount + 1);
      }, 100);
    }
  }
}

initComboboxIndexExamples();
