// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

import '@aurodesignsystem/auro-menu';
import '@aurodesignsystem/auro-dropdown';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the dropdown menu.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helperText - Defines the content of the helperText.
 */

// build the component class
class AuroSuggest extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Select an option';
    this.expanded = false;
    this.displayValue = null;
    this.value = '';

    this.addEventListener('dropdownToggled', (event) => {
      this.expanded = event.detail.expanded;
    });
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      /**
       * @private
       */
      expanded: { Boolean },

      /**
       * @private
       */
      displayValue: { type: String },
      value: {
        type: String,
        reflect: true
      },
      placeholder: { type: String }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  firstUpdated() {
    const listbox = document.querySelector('[role="listbox"');
    const options = [...listbox.children];
    const input = this.shadowRoot.querySelector('auro-input');
    const dropdown = this.shadowRoot.querySelector('auro-dropdown');

    const incrementOption = (direction) => {
      /**
       * Determine which option index is the next one to select
       */
      let increment;

      if (direction === 'next') increment = 1;
      if (direction === 'prev') increment = -1;

      let newSelectedIndex;

      if (listbox.hasAttribute('aria-activedescendant')) {
        /**
         * If we already have previously setup aria-activedescendant
         * check if it already has the selected visual appearance.
         * If not, we will go to it first. Otherwise we will go the
         * next/prev option using it as the starting paoint
         */
        const selectedElementID = listbox.getAttribute('aria-activedescendant');
        const selectedElement = listbox.querySelector('#' + selectedElementID);

        if (selectedElement.classList.contains('selected')) {
          newSelectedIndex = options.indexOf(selectedElement) + increment;
          selectedElement.classList.remove('selected');
        } else {
          newSelectedIndex = options.indexOf(selectedElement)
        }
      } else {
        /** When no previous value has been selected go to the first or last
         * option in the menu depending on which direction you are moving
         */
        if (direction === 'prev') {
          newSelectedIndex = options.length - 1;
        } else {
          newSelectedIndex = 0;
        }
      }

      /**
       * Wrap the navigation cycle of the list
       */
      if (newSelectedIndex > options.length - 1) {
        newSelectedIndex = 0;
      } else if (newSelectedIndex < 0) {
        newSelectedIndex = options.length - 1;
      }

      /**
       * After figuring out which item should be selected
       * clear out all previous selections and select the
       * new option determined above
       */
      while (!options[newSelectedIndex].classList.contains('selected')) {
        if (options[newSelectedIndex].classList.contains('hidden')) {
          newSelectedIndex = newSelectedIndex + increment;
          if (newSelectedIndex > options.length - 1) {
            newSelectedIndex = 0;
          } else if (newSelectedIndex < 0) {
            newSelectedIndex = options.length -1;
          }
        } else {
          options[newSelectedIndex].classList.add('selected');
          listbox.setAttribute('aria-activedescendant', options[newSelectedIndex].id);
          this.value = options[newSelectedIndex].getAttribute('data-value');
        }
      }
    }

    /**
     * When the input value changes set aria-activedescendant on menu
     * if there is a matching, non-hidden option in the menu
     */
    input.addEventListener('input', function(evt) {
      listbox.removeAttribute('aria-activedescendant');

      options.forEach((option) => {
        if (!listbox.hasAttribute('aria-activedescendant')) {
          const value = option.getAttribute('data-value');
          const matched = this.value.toLowerCase() === value.toLowerCase();

          if (matched) {
            listbox.setAttribute('aria-activedescendant', option.id);
          }
        }

      });
    })

    listbox.addEventListener('mousedown', event => {
      const option = event.target.closest('auro-menuoption')

      if (!option) return; // do nothing if the user clicked in the listbox but not on an option

      /**
       * Apply the selection value
       */
      listbox.setAttribute('aria-activedescendant', option.id)
      this.value = option.getAttribute('data-value');

      /**
       * Change visual appearance
       */
      options.forEach(element => element.classList.remove('selected'))
      option.classList.add('selected')
      dropdown.hide();
    });

    /**
     * The following code must execute on keydown rather than keyup or
     * default client handling if the events will break our intended behavior.
     */
    input.addEventListener('keydown', function(evt) {
      const { key } = evt;

      if (key === 'Tab') {
        dropdown.hide();
        return;
      }

      /**
       * prevent moving the cursor position while navigating the menu options
       */
      if (key === 'ArrowUp' || key === 'ArrowDown') {
        evt.preventDefault();
      }
    });

    input.addEventListener('keyup', function(evt) {
      const { key } = evt;

      if (input.value.length === 0) {
        /**
         * Dropdown should only be visible when there is a value in the input
         * as there are no "suggestions" for an empty value
         */
        dropdown.hide();
      } else {
        if (key === 'Enter') {
          // Toggle the dropdown
          if (dropdown.isPopoverVisible) {
            dropdown.hide();
          } else {
            dropdown.show();
          }
        } else {
          /**
           * We do not want to filter when the value changes programmatically,
           * only when the user types a new value. Certain keys shouldn't
           * initiate a filter and will be excluded.
           */
          const keyExclusions = [
            'Alt',
            'ArrowDown',
            'ArrowUp',
            'ArrowRight',
            'ArrowLeft',
            'ContextMenu',
            'Control',
            'End',
            'Escape',
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12',
            'F13',
            'Help',
            'Home',
            'Meta',
            'PageDown',
            'PageUp',
            'Shift',
            'Tab'
          ]

          if (!keyExclusions.includes(key)) {

            /**
             * TODO: this regex breaks if `[` is entered in the input value
             * Need to handle this type of failure
             */
            const regex = new RegExp(this.value, 'i');

            options.forEach((option) => {
              option.classList.remove('selected');
              option.classList.add('hidden');

              if (this.value.length === 0) return;

              if (regex.test(option.getAttribute('data-value'))) {
                option.classList.remove('hidden');
              }
            });
          }

          /**
           * Perform navigation of menu options on arrow key
           */
          if (key === 'ArrowDown' || key === 'ArrowUp') {
            if (dropdown.isPopoverVisible) {
              if (key === 'ArrowDown') {
                incrementOption('next');
              } else if (key === 'ArrowUp') {
                incrementOption('prev');
              }
            }
            return;
          }

          dropdown.show();
        }
      }
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <auro-dropdown
          for="dropdownMenu"
          bordered
          rounded
          chevron
          noKeyboardShow
          aria-haspopup="listbox"
          aria-owns="listBox"
          aria-expanded="${this.expanded}"
          role="combobox">
          <auro-input
            slot="trigger"
            borderless
            aria-autocomplete="$1"
            aria-controls="listBox"
            aria-activedescendant="option-0"
            value="${this.value}">
            <slot name="label" slot="label"></slot>
          </auro-input>
          <div
            class="menuWrapper"
            aria-labelledby="$1">
            <slot></slot>
          </div>
          <slot name="helperText" slot="helperText"></slot>
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-suggest")) {
  customElements.define("auro-suggest", AuroSuggest);
}
