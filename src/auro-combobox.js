// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';

/* eslint-disable max-lines */

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {Object} optionSelected - Specifies the current selected option.
 * @prop {String} value - Value selected for the dropdown menu.
 * @attr {Boolean} error - Sets a persistent error state (e.g. an error state returned from the server).
 * @attr {Boolean} disabled - If set, disables the combobox.
 * @attr {Boolean} noFilter - If set, combobox will not filter menuoptions based in input.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @attr {Boolean} triggerIcon - If set, the `icon` attribute will be applied to the trigger `auro-input` element.
 * @attr {String} type - Applies the defined value as the type attribute on auro-input.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @fires auroCombobox-ready - Notifies that the component has finished initializing.
 * @fires auroCombobox-valueSet - Notifies that the component has a new value set.
 */

// build the component class
class AuroCombobox extends LitElement {
  constructor() {
    super();

    this.noFilter = false;
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
    this.msgSelectionMissing = 'Please select an option.';
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      error: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      noFilter: {
        type: Boolean,
        reflect: true
      },
      optionSelected: { type: Object },
      noValidate: { type: Boolean },
      required: {
        type: Boolean,
        reflect: true
      },
      triggerIcon: {
        type: Boolean,
        reflect: true
      },
      type: {
        type: String,
        reflect: true
      },
      value: {
        type: String,
        reflect: true
      },

      /**
       * @private
       */
      availableOptions: { type: Array },

      /**
       * @private
       */
      displayValue: { type: String },

      /**
       * @private
       */
      optionActive: { type: Object },

      /**
       * @private
       */
      msgSelectionMissing: { type: String }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Processes hidden state of all menu options and determines if there are any available options not hidden.
   * @private
   * @returns {void}
   */
  handleMenuOptions() {
    this.generateOptionsArray();
    this.availableOptions = [];

    if (this.noFilter) {
      this.options.forEach((option) => {
        this.availableOptions.push(option);
      });
    } else {

      let noMatchOption = undefined; // eslint-disable-line no-undef-init

      this.options.forEach((option) => {
        let matchString = option.innerText.toLowerCase();

        if (option.hasAttribute('nomatch')) {
          noMatchOption = option;
        }

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
  }

  /**
   * Determines the element error state based on the `required` attribute and input value.
   * @private
   * @returns {void}
   */
  handleRequired() {
    if (this.required) {
      if (!this.value) {
        this.error = true;
        this.setAttribute('error', '');
      } else {
        this.error = false;
        this.removeAttribute('error');
      }
    }
  }

  /**
   * Determines the element error state based on the `required` attribute and input value.
   * @private
   * @returns {void}
   */
  generateOptionsArray() {
    if (this.menu) {
      this.options = this.menu.querySelectorAll('auro-menuoption');
    } else {
      this.options = [];
    }
  }

  /**
   * Binds all behavior needed to the dropdown after rendering.
   * @private
   * @returns {void}
   */
  configureDropdown() {
    this.dropdown.setAttribute('role', 'combobox');
    this.dropdown.addEventListener('auroDropdown-ready', () => {
      this.auroDropdownReady = true;
    });

    this.dropdown.addEventListener('auroDropdown-triggerClick', () => {
      if (!this.isPopoverVisible && this.triggerInput.value.length > 0 && this.availableOptions) {
        this.dropdown.show();
      }
    });

    if (!this.dropdown.hasAttribute('aria-expanded')) {
      this.dropdown.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);
    }
  }

  /**
   * Binds all behavior needed to the menu after rendering.
   * @private
   * @returns {void}
   */
  configureMenu() {
    this.menu.addEventListener('auroMenu-ready', () => {
      this.auroMenuReady = true;
    });

    // handle the menu event for an option selection
    this.addEventListener('auroMenu-selectedOption', () => {
      if (this.auroInputHelpText === this.msgSelectionMissing) {
        this.auroInputHelpText = undefined; /* eslint-disable-line camelcase */
      }

      this.removeAttribute('error');
      this.optionSelected = this.menu.optionSelected;
      this.value = this.optionSelected.value;
      this.displayValue = this.optionSelected.innerText;
      this.triggerInput.value = this.optionSelected.innerText;
      this.menu.matchWord = this.triggerInput.value;
      this.classList.add('combobox-filled');

      // dropdown bib should hide when making a selection
      if (this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }

      // update the hidden state of options based on newly selected value
      this.handleMenuOptions();

      this.dispatchEvent(new CustomEvent('auroCombobox-valueSet', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    });

    this.addEventListener('auroMenu-customEventFired', () => {
      if (this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }
    });

    this.addEventListener('auroMenu-activatedOption', (evt) => {
      this.optionActive = evt.detail;
    });

    this.menu.addEventListener('auroMenu-selectValueFailure', () => {
      this.setAttribute('error', '');
    });
  }

  /**
   * Binds all behavior needed to the input after rendering.
   * @private
   * @returns {void}
   */
  configureInput() {
    this.input.addEventListener('auroInput-ready', () => {
      this.auroInputReady = true;
    });

    this.triggerInput.addEventListener('input', () => {
      // pass the input value to menu to do match highlighting
      this.menu.matchWord = this.triggerInput.value;
      // reset all states
      this.displayValue = this.triggerInput.value;
      this.value = null;
      this.optionSelected = null;
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
      if (!this.availableOptions || this.availableOptions.length === 0) {
        this.dropdown.hide();
      }
    });

    this.triggerInput.addEventListener('blur', () => {
      this.menu.resetOptionsStates();

      if (this.triggerInput.value.length > 0 && !this.optionSelected) {
        this.setAttribute('error', '');
        this.auroInputHelpText = this.msgSelectionMissing; /* eslint-disable-line camelcase */
      }
    });

    this.triggerInput.addEventListener('auroInput-validated', (evt) => {
      if (evt.detail.isValid) {
        this.removeAttribute('error');
      } else {
        this.setAttribute('error', '');
      }
    });

    this.triggerInput.addEventListener('auroInput-helpText', (evt) => {
      this.auroInputHelpText = evt.detail.message; /* eslint-disable-line camelcase */
    });
  }

  /**
   * Binds all behavior needed to the combobox after rendering.
   * @private
   * @returns {void}
   */
  configureCombobox() {
    this.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        if (this.dropdown.isPopoverVisible && this.optionActive) {
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
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');
    this.triggerInput = this.dropdown.querySelector('[slot="trigger"');
    this.menu = this.querySelector('auro-menu');
    this.input = this.dropdown.querySelector('auro-input');

    this.configureDropdown();
    this.configureMenu();
    this.configureInput();
    this.configureCombobox();

    this.checkReadiness();
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroCombobox-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * Monitors readiness of peer dependencies and begins work that should only start when ready.
   * @private
   * @returns {void}
   */
  checkReadiness() {
    if (this.auroDropdownReady && this.auroInputReady && this.auroMenuReady) {
      this.readyActions();
      this.notifyReady();
    } else {
      // Start a retry counter to limit the retry count
      if (!this.readyRetryCount && this.readyRetryCount !== 0) {
        this.readyRetryCount = 0;
      } else {
        this.readyRetryCount += 1;
      }

      const readyTimer = 0;
      const readyRetryLimit = 200;

      if (this.readyRetryCount <= readyRetryLimit) {
        setTimeout(() => {
          this.checkReadiness();
        }, readyTimer);
      }
    }
  }

  /**
   * Functionality that should not be performed until the combobox is in a ready state.
   * @private
   * @returns {void}
   */
  readyActions() {
    // Set the initial value in auro-menu if defined
    if (this.hasAttribute('value') && this.getAttribute('value').length > 0) {
      this.menu.value = this.value;
    }
  }

  /**
   * Focuses the combobox trigger input.
   * @returns {void}
   */
  focus() {
    this.shadowRoot.querySelector('auro-dropdown').querySelector('auro-input').
      focus();
  }

  updated(changedProperties) {
    // After the component is ready, send direct value changes to auro-menu.
    if (this.ready && changedProperties.has('value')) {
      this.menu.value = this.value;
    }
  }

  /**
   * Watch for slot changes and recalculate the menuoptions.
   * @private
   * @returns {void}
   */
  handleSlotChange() {
    this.handleMenuOptions();
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <div aria-live="polite" class="util_displayHiddenVisually">
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
          ?disabled="${this.disabled}"
          ?error="${this.error}"
          disableEventShow>
          <auro-input
            slot="trigger"
            borderless
            value="${this.displayValue === null ? `` : this.displayValue}"
            ?required="${this.required}"
            ?noValidate="${this.noValidate}"
            .type="${this.type}"
            ?icon="${this.triggerIcon}">
            <slot name="label" slot="label"></slot>
          </auro-input>
          <div class="menuWrapper">
            <slot slotchange="${this.handleSlotChange()}"></slot>
          </div>
          <span slot="helpText">
            ${this.auroInputHelpText
              ? html`
                ${this.auroInputHelpText}
              `
              : html`
                ${this.error
                  ? html`
                    ${this.required
                      ? html`
                        ${this.msgSelectionMissing}
                      `
                      : html`
                        <slot name="helpText"></slot>
                      `
                    }
                  `
                  : html`
                    <slot name="helpText"></slot>
                  `
                }
              `
            }
          </span>
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-combobox")) {
  customElements.define("auro-combobox", AuroCombobox);
}
