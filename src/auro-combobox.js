// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @attr {Object} optionSelected - Specifies the current selected option.
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the dropdown menu.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helperText - Defines the content of the helperText.
 */

// build the component class
class AuroCombobox extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Select an option';
    this.value = null;
    this.optionSelected = null;

    this.privateDefaults();
  }

  /**
   * @private
   * @returns {void} Internal defaults.
   */
  privateDefaults() {
    this.displayValue = null;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      placeholder: { type: String },

      /**
       * @private
       */
      availableOptions: { type: Boolean },
      displayValue: { type: String },
      optionSelected: { type: Object },
      value: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  handleMenuOptions() {
    let availableOptionsLength = 0;

    this.options.forEach((option) => {
      // only count options that match the typed input value AND are not currently selected
      if (option.innerText.toLowerCase().includes(this.triggerInput.value.toLowerCase())) {
        option.removeAttribute('hidden');
        availableOptionsLength += 1;
      } else {
        // Hide all other options
        option.setAttribute('hidden', '');
      }
    });

    if (availableOptionsLength > 0) {
      this.availableOptions = true;
    } else {
      this.availableOptions = false;
    }
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');
    this.menu = this.querySelector('[role="listbox"');
    this.options = [...this.menu.children];
    this.triggerInput = this.dropdown.querySelector('[slot="trigger"');

    // Initially verify there are available options in the menu to show
    if (this.options.length > 0) {
      this.availableOptions = true;
    }

    // handle the menu event for an option selection
    this.addEventListener('selectedOption', () => {
      this.displayValue = this.menu.optionSelected.innerText;
      this.triggerInput.value = this.menu.optionSelected.value;
      this.value = this.menu.optionSelected.value;
      this.optionSelected = this.menu.optionSelected;

      // dropdown bib should hide when making a selection
      if (this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }

      // update the hidden state of options based on newly selected value
      this.handleMenuOptions();
    });

    this.addEventListener('click', () => {
      if (!this.dropdown.isPopoverVisible && this.triggerInput.value.length > 0 && this.availableOptions) {
        this.dropdown.show();
      }
    });

    this.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        if (this.dropdown.isPopoverVisible) {
          this.menu.makeSelection();
        } else if (this.triggerInput.value.length > 0 && this.availableOptions) {
          this.dropdown.show();
        }
      }

      if (evt.key === 'Tab' && this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }

      /**
       * Prevent moving the cursor position while navigating the menu options.
       */
      if (evt.key === 'ArrowUp' || evt.key === 'ArrowDown') {
        if (this.dropdown.isPopoverVisible) {
          evt.preventDefault();
        }
      }

      if (evt.key === 'ArrowUp') {
        this.menu.selectNextItem('up');
      }

      if (evt.key === 'ArrowDown') {
        this.menu.selectNextItem('down');
      }
    });

    this.triggerInput.addEventListener('input', () => {
      // pass the input value to menu to do match highlighting
      this.menu.matchWord = this.triggerInput.value;

      // reset all states
      this.displayValue = this.triggerInput.value;
      this.value = null;
      this.menu.resetOptionsStates();
      this.handleMenuOptions();

      // hide the menu if the value is empty otherwise show if there are available suggestions
      if (this.triggerInput.value.length === 0) {
        this.dropdown.hide();
        this.classList.remove('combobox-filled');
      } else if (!this.dropdown.isPopoverVisible && this.availableOptions) {
        this.dropdown.show();
        this.classList.add('combobox-filled');
      }

      // force the dropdown bib to hide if the input value has no matching suggestions
      if (!this.availableOptions) {
        this.dropdown.hide();
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
          disableEventShow>
          <!--
          NEED TO LOOK IF THESE ARIA RULES SHOULD BE INTEGRATED
          aria-haspopup="listbox"
          aria-owns="listBox"
          role="combobox" -->
          <auro-input
            slot="trigger"
            borderless
            value="${this.displayValue === null ? `` : this.displayValue}">
            <!--
              NEED TO LOOK IF THESE ARIA RULES SHOULD BE INTEGRATED
              aria-autocomplete="$1"
              aria-controls="listBox"
              aria-activedescendant="option-0" -->
            <slot name="label" slot="label"></slot>
          </auro-input>
          <div class="menuWrapper">
            <slot></slot>
          </div>
          <slot name="helperText" slot="helperText"></slot>
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-combobox")) {
  customElements.define("auro-combobox", AuroCombobox);
}
