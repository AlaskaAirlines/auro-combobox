import { dynamicMenuExample } from '../apiExamples/dynamicMenu';
import { valueExample } from '../apiExamples/value';
import { focusExample } from '../apiExamples/focus';

export function initComboboxApiExamples() {
  // setTimeout handles issue where content is sometimes loaded after the functions get called
  setTimeout(() => {
    dynamicMenuExample();
    valueExample();
    focusExample();
  }, 100);
}
