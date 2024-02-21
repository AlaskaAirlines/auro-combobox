import { dynamicMenuExample } from '../apiExamples/dynamicMenu';
import { valueExample } from '../apiExamples/value';
import { focusExample } from '../apiExamples/focus';

export function initComboboxApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    dynamicMenuExample();
    valueExample();
    focusExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initComboboxApiExamples(initCount + 1);
      }, 100);
    }
  }
}

initComboboxApiExamples();
