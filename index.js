import { AuroCombobox } from './src/auro-combobox.js';

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
