import { AuroInput } from '@aurodesignsystem/auro-input/src/auro-input.js';
import { AuroDropdown } from '@aurodesignsystem/auro-dropdown/src/auro-dropdown.js';
import { AuroCombobox } from './src/auro-combobox.js';

if (!customElements.get("combobox-input")) {
  customElements.define("combobox-input", class extends AuroInput {});
}

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroCombobox {});
  }
}
