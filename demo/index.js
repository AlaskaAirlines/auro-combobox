/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */
import { persistentExample } from '../apiExamples/persistent';
import { swapValueExample } from '../apiExamples/swapValue';

import { AuroCombobox } from '../src/auro-combobox.js';
import '@aurodesignsystem/auro-menu';

AuroCombobox.register();
AuroCombobox.register('custom-combobox');

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    persistentExample();
    swapValueExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
