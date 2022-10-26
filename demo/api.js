import { populateCombobox } from '../apiExamples/dynamicMenu';
import { initValueExamples } from '../apiExamples/value';
import { focus } from './../apiExamples/focus';

class Examples {
  initialize() {
    function initializeExample(element, callback, retryCount) {
      const elem = document.querySelector(element);

      if (!elem || !elem.ready) {
        // If the component is not ready, retry until it is
        if (!retryCount && retryCount != 0) {
          retryCount = 0;
        } else {
          retryCount += 1;
        }

        if (retryCount < 10) {
          setTimeout(initializeExample, 500, element, callback, retryCount);
        } else {
          console.error('Unable to initialize functional example code for:', element);
        }
      } else {
        callback(elem);
      }
    }

    /**
     * Value examples
     */
    initializeExample('auro-combobox#valueExample', function(elem) {
      initValueExamples(elem);
    });

    /**
     * Apply focus to trigger using element.focus()
     */
    initializeExample('#focusExample', function(elem) {
      focus(elem);
    });

    /**
     * Populate combobox via Dynamic API
     */
    initializeExample('#dynamicMenuExample', function(elem) {
      const input = elem.shadowRoot.querySelector('auro-dropdown').querySelector('auro-input');

      input.addEventListener('input', () => {
        populateCombobox(elem);
      });
    });
  }
}

export { Examples }
