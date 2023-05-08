import { dynamicMenuExample } from '../apiExamples/dynamicMenu';
import { valueExample } from '../apiExamples/value';
import { focusExample } from '../apiExamples/focus';

export function initComboboxApiExamples() {
  setTimeout(() => {
    dynamicMenuExample();
    valueExample();
    focusExample();
  }, 100);
}
