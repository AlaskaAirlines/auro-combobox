// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import { AuroDependencyVersioning } from "../scripts/dependencyTagVersioning.mjs";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit";
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';

/* eslint-disable max-lines, lit/binding-positions, lit/no-invalid-html */

import '@aurodesignsystem/auro-menu';
import { AuroDropdown } from '@aurodesignsystem/auro-dropdown/src/auro-dropdown.js';
import dropdownVersion from './dropdownVersion';

import { AuroInput } from '@aurodesignsystem/auro-input/src/auro-input.js';
import inputVersion from './inputVersion';

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {Object} optionSelected - Specifies the current selected option.
 * @prop {String} value - Value selected for the dropdown menu.
 * @prop {Boolean} checkmark - When attribute is present auro-menu will apply checkmarks to selected options.
 * @attr {Boolean} error - Sets a persistent error state (e.g. an error state returned from the server).
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
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
export class AuroCombobox extends LitElement {
  constructor() {
    super();

    this.noFilter = false;
    this.validity = undefined;
    this.value = null;
    this.optionSelected = null;

    this.privateDefaults();

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();
    this.dropdownTag = versioning.generateTag('auro-dropdown', dropdownVersion, AuroDropdown);
    this.inputTag = versioning.generateTag('auro-input', inputVersion, AuroInput);
  }

  /**
   * @private
   * @returns {void} Internal defaults.
   */
  privateDefaults() {
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
      setCustomValidity: {
        type: String,
        reflect: true
      },
      validity: {
        type: String,
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
      checkmark: {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      availableOptions: { type: Array },

      /**
       * @private
       */
      optionActive: { type: Object },

      /**
       * @private
       */
      msgSelectionMissing: { type: String },

      /**
       * @private
       */
      dropdownElementName: { type: String },

      /**
       * @private
       */
      dropdownTag: { type: Object },

      /**
       * @private
       */
      inputElementName: { type: String },

      /**
       * @private
       */
      inputTag: { type: Object }
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
        if (this.input.value && matchString.includes(this.input.value.toLowerCase())) {
          option.removeAttribute('hidden');
          this.availableOptions.push(option);
        } else if (!option.hasAttribute('persistent')) {
          // Hide all other non-persistent options
          option.setAttribute('hidden', '');
        }
      });

      if (this.availableOptions.length === 0) {
        if (noMatchOption) {
          noMatchOption.removeAttribute('hidden');
        } else {
          this.hideBib();
        }
      } else if (noMatchOption) {
        noMatchOption.setAttribute('hidden', '');
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
   * Hides the dropdown bib if its open.
   * @private
   * @returns {void}
   */
  hideBib() {
    if (this.dropdown && this.dropdown.isPopoverVisible) {
      this.dropdown.hide();
    }
  }

  /**
   * Shows the dropdown bib if there are options to show.
   * @private
   * @returns {void}
   */
  showBib() {
    if (!this.dropdown.isPopoverVisible && this.input.value && this.input.value.length > 0) {
      if (this.noFilter || (this.availableOptions && this.availableOptions.length > 0)) { // eslint-disable-line no-extra-parens
        this.dropdown.show();
      }
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
      this.showBib();
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
    if (this.noFilter) {
      this.auroMenuReady = true;
    } else {
      this.menu.addEventListener('auroMenu-ready', () => {
        this.auroMenuReady = true;
      });
    }


    // handle the menu event for an option selection
    this.addEventListener('auroMenu-selectedOption', () => {
      // dropdown bib should hide when making a selection
      this.hideBib();

      if (this.menu.optionSelected) {
        if (this.optionSelected !== this.menu.optionSelected) {
          this.optionSelected = this.menu.optionSelected;
        }

        if (this.value !== this.optionSelected.value) {
          this.value = this.optionSelected.value;
        }

        if (this.input.value !== this.optionSelected.innerText) {
          this.input.value = this.optionSelected.innerText;
        }

        if (this.menu.matchWord !== this.input.value) {
          this.menu.matchWord = this.input.value;
        }

        this.classList.add('combobox-filled');

        // update the hidden state of options based on newly selected value
        this.handleMenuOptions();

        this.dispatchEvent(new CustomEvent('auroCombobox-valueSet', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));
      }
    });

    this.addEventListener('auroMenu-customEventFired', () => {
      this.hideBib();
    });

    this.addEventListener('auroMenu-activatedOption', (evt) => {
      this.optionActive = evt.detail;
    });

    this.menu.addEventListener('auroMenu-selectValueFailure', () => {
      this.optionSelected = undefined;
    });

    this.menu.addEventListener('auroMenu-selectValueReset', () => {
      this.optionSelected = undefined;
      this.value = undefined;
      this.validate();
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

    this.input.addEventListener('keyup', (evt) => {
      if (evt.key.length === 1 || evt.key === 'Backspace' || evt.key === 'Delete') {
        this.showBib();
      }
    });

    /**
     * Validate every time we remove focus from the datepicker.
     */
    this.addEventListener('focusout', () => {
      if (document.activeElement !== this) {
        this.validate();
      }

      if (typeof this.value === 'object') {
        this.value = '';
      }
    });

    this.input.addEventListener('input', () => {
      this.menu.matchWord = this.input.value;
      this.optionActive = null;

      if (this.ready) {
        if (this.value !== this.input.value) {
          this.value = this.input.value;
        }

        if (this.value !== this.menu.value) {
          this.menu.value = this.value;
        }

        if (this.optionSelected && this.input.value !== this.optionSelected.innerText) {
          this.optionSelected = undefined;
        }

        this.menu.resetOptionsStates();
      }

      this.handleMenuOptions();

      this.handleInputValueChange();
      // validate only if the the value was set programmatically
      if (document.activeElement !== this) {
        this.validate();
      }

      // hide the menu if the value is empty otherwise show if there are available suggestions
      if (this.input.value.length === 0) {
        this.hideBib();
        this.classList.remove('combobox-filled');
      } else if (!this.dropdown.isPopoverVisible && this.availableOptions) {
        this.classList.add('combobox-filled');
      }

      // force the dropdown bib to hide if the input value has no matching suggestions
      if (!this.availableOptions || this.availableOptions.length === 0) {
        this.hideBib();
      }
    });

    this.input.addEventListener('auroInput-helpText', (evt) => {
      this.auroInputHelpText = evt.detail.message;
    });
  }

  /**
   * Handle changes to the input value and trigger changes that should result.
   * @private
   * @returns {void}
   */
  handleInputValueChange() {
    if (this.value !== this.input.value) {
      this.value = this.input.value;

      this.dispatchEvent(new CustomEvent('auroCombobox-valueSet', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    }

    // This check prevents the component showing an error when a required datepicker is first rendered
    if (this.input.value) {
      this.validate();
    }
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
        } else {
          this.showBib();
        }
      }

      if (evt.key === 'Tab') {
        this.hideBib();
      }

      /**
       * Prevent moving the cursor position while navigating the menu options.
       */
      if (evt.key === 'ArrowUp' || evt.key === 'ArrowDown') {
        if (this.availableOptions.length > 0) {
          this.dropdown.show();
        }

        if (this.dropdown.isPopoverVisible) {
          evt.preventDefault();
        }
      }

      if (this.dropdown.isPopoverVisible) {
        if (evt.key === 'ArrowUp') {
          this.menu.selectNextItem('up');
        }

        if (evt.key === 'ArrowDown') {
          this.menu.selectNextItem('down');
        }
      }
    });
  }

  /**
   * Determines the validity state of the element.
   * @private
   * @returns {void}
   */
  validate() {
    if (this.hasAttribute('error')) {
      this.validity = 'customError';
    } else {
      if (this.validity !== this.input.validity) {
        this.validity = this.input.validity;
      }

      /**
       * Only validate once we interact with the datepicker
       * this.value === undefined is the initial state pre-interaction.
       *
       * The validityState definitions are located at https://developer.mozilla.org/en-US/docs/Web/API/ValidityState.
       */
      if (this.value !== undefined && this.input.value.length > 0) {
        // combobox specific validation goes here....
      }
    }
  }

  /**
   * Handle element attributes on update.
   * @private
   * @returns {void}
   */

  performUpdate() {
    super.performUpdate();

    this.menus = [...this.querySelectorAll('auro-menu')];

    for (let index = 0; index < this.menus.length; index += 1) {
      if (this.checkmark) {
        this.menus[index].removeAttribute('nocheckmark');
      } else {
        this.menus[index].setAttribute('nocheckmark', '');
      }
    }
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector(this.dropdownTag._$litStatic$); // eslint-disable-line no-underscore-dangle
    this.menu = this.querySelector('auro-menu');
    this.input = this.dropdown.querySelector(this.inputTag._$litStatic$); // eslint-disable-line no-underscore-dangle

    this.configureMenu();
    this.configureInput();
    this.configureDropdown();
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
    this.input.focus();
  }

  updated(changedProperties) {
    // After the component is ready, send direct value changes to auro-menu.
    if (this.ready && changedProperties.has('value')) {
      if (this.value) {
        if (this.optionSelected && this.optionSelected.value === this.value) {
          // If value updates and the previously selected option already matches the new value
          // just update the input value to use the innerText of the optionSelected
          this.input.value = this.optionSelected.innerText;
        } else {
          // Otherwise just enter the value into the input
          this.optionSelected = undefined;
          this.input.value = this.value;

          // If the value got set programmatically make sure we hide the bib
          if (!this.contains(document.activeElement)) {
            this.hideBib();
          }
        }
      } else {
        this.input.value = '';
        this.menu.value = undefined;
      }
    }

    if (changedProperties.has('error')) {
      this.input.setAttribute('error', this.getAttribute('error'));
      this.validate();
    }

    if (changedProperties.has('setCustomValidity')) {
      this.input.setAttribute('setCustomValidity', this.setCustomValidity);
    }
  }

  /**
   * Watch for slot changes and recalculate the menuoptions.
   * @private
   * @returns {void}
   */
  handleSlotChange() {
    if (this.auroMenuReady) {
      this.options = this.menu.querySelectorAll('auro-menuoption');
    }

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
        <${this.dropdownTag}
          for="dropdownMenu"
          bordered
          rounded
          matchWidth
          nocheckmark
          ?disabled="${this.disabled}"
          ?error="${this.validity !== undefined && this.validity !== 'valid'}"
          disableEventShow>
          <${this.inputTag}
            auro-input
            slot="trigger"
            bordered
            ?required="${this.required}"
            ?noValidate="${this.noValidate}"
            ?disabled="${this.disabled}"
            ?icon="${this.triggerIcon}"
            .type="${this.type}">
            <slot name="label" slot="label"></slot>
          </${this.inputTag}>
          <div class="menuWrapper">
            <slot slotchange="${this.handleSlotChange()}"></slot>
          </div>
          <span slot="helpText">
            ${this.auroInputHelpText
              ? html`
                ${this.auroInputHelpText}
              `
              : html`
                <slot name="helpText"></slot>
              `
            }
          </span>
        </${this.dropdownTag}>
      </div>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-combobox")) {
  customElements.define("auro-combobox", AuroCombobox);
}
