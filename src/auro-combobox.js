// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

/* eslint-disable max-lines */

import '@aurodesignsystem/auro-menu';

// Import touch detection lib
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {Object} optionSelected - Specifies the current selected option.
 * @prop {Object} optionActive - Specifies the current active option.
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the dropdown menu.
 * @attr {Boolean} error - Sets a persistent error message (e.g. an error message returned from the server).
 * @attr {Boolean} disabled - If set, disables the combobox.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
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
    this.availableOptions = [];
    this.optionActive = null;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      placeholder: { type: String },
      error: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      availableOptions: { type: Array },
      displayValue: { type: String },
      optionSelected: { type: Object },
      optionActive: { type: Object },
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

  /**
   * Processes hidden state of all menu options and determines if there are any available options not hidden.
   * @private
   * @returns {void}
   */
  handleMenuOptions() {
    this.availableOptions = [];

    let noMatchOption = undefined; // eslint-disable-line no-undef-init

    this.options.forEach((option) => {
      if (option.hasAttribute('nomatch')) {
        noMatchOption = option;
      }

      let matchString = option.innerText.toLowerCase();

      if (option.hasAttribute('persistent')) {
        this.availableOptions.push(option);
      }

      if (option.hasAttribute('suggest')) {
        matchString = `${matchString} ${option.getAttribute('suggest')}`.toLowerCase();
      }

      // only count options that match the typed input value AND are not currently selected
      if (matchString.includes(this.triggerInput.value.toLowerCase())) {
        option.removeAttribute('hidden');
        this.availableOptions.push(option);
      } else if (!option.hasAttribute('persistent')) {
        // Hide all other non-persistent options
        option.setAttribute('hidden', '');
      }
    });

    if (noMatchOption) {
      if (this.availableOptions.length === 0) {
        noMatchOption.removeAttribute('hidden');
      } else {
        noMatchOption.setAttribute('hidden', '');
      }
    }
  }

  /**
   * Determines the element error state based on the `required` attribute and input value.
   * @private
   * @returns {void}
   */
  handleRequired() {
    if (this.required) {
      if (!this.triggerInput.value || this.triggerInput.value.length === 0) {
        this.error = true;
      } else {
        this.error = false;
      }
    }
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');
    this.dropdown.setAttribute('aria-role', 'combobox');

    this.menu = this.querySelector('auro-menu');
    this.options = [...this.menu.children];
    this.triggerInput = this.dropdown.querySelector('[slot="trigger"');

    // handle the menu event for an option selection
    this.addEventListener('selectedOption', () => {
      this.optionSelected = this.menu.optionSelected;
      this.value = this.optionSelected.value;
      this.displayValue = this.optionSelected.innerText;
      this.triggerInput.value = this.optionSelected.value;

      // dropdown bib should hide when making a selection
      if (this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }

      // update the hidden state of options based on newly selected value
      this.handleMenuOptions();
    });

    this.addEventListener('auroMenuActivatedOption', (evt) => {
      this.optionActive = evt.detail;
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

      if (this.dropdown.isPopoverVisible && this.availableOptions.length > 0) {
        if (evt.key === 'ArrowUp') {
          this.menu.selectNextItem('up');
        }

        if (evt.key === 'ArrowDown') {
          this.menu.selectNextItem('down');
        }
      }
    });

    this.triggerInput.addEventListener('input', () => {
      // pass the input value to menu to do match highlighting
      this.menu.matchWord = this.triggerInput.value;

      // reset all states
      this.displayValue = this.triggerInput.value;
      this.value = null;
      this.optionActive = null;
      this.menu.resetOptionsStates();
      this.handleMenuOptions();
      this.handleRequired();

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
        <div aria-live="polite" style="height: 0; width: 0; overflow: hidden;">
          ${this.optionActive && this.availableOptions.length > 0
            ? html`
              ${`${this.optionActive.innerText}, selected, ${this.availableOptions.indexOf(this.optionActive) + 1} of ${this.availableOptions.length}`}
            `
            : undefined
          }
        </div>
        <auro-dropdown
          for="dropdownMenu"
          bordered
          rounded
          chevron
          ?disabled="${this.disabled}"
          ?error="${this.error}"
          disableEventShow>
          <auro-input
            slot="trigger"
            borderless
            value="${this.displayValue === null ? `` : this.displayValue}"
            ?required="${this.required}">
            <slot name="label" slot="label"></slot>
          </auro-input>
          <div class="menuWrapper">
            <slot></slot>
          </div>
          ${!this.error
            ? html`
                <slot name="helpText" slot="helpText"></slot>
              `
            : html`
              ${this.required
                ? html`
                  <span slot="helpText">
                    Please fill out this field.
                  </span>
                `
                : html`
                  <slot name="helpText" slot="helpText"></slot>
                `
              }
            `
          }
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-combobox")) {
  customElements.define("auro-combobox", AuroCombobox);
}
