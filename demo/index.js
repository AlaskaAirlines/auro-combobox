import { persistentEventOption } from '../apiExamples/persistent';
import { swapComboboxValues } from '../apiExamples/swapValue';

class Examples {
  initialize() {
    function initializeExample(elements, callback, elementsPendingReady, retryCount) {
      if (!elementsPendingReady) {
        elementsPendingReady = elementsPendingReady || [];
    
        if (typeof elements === 'string') {
          elementsPendingReady.push(elements);
        } else {
          elementsPendingReady = elements;
        }
    
        initializeExample(elements, callback, elementsPendingReady);
      } else {
        let readyCount = 0;
    
        elementsPendingReady.forEach(element => {
          if (document.querySelector(element) && document.querySelector(element)['ready']) {
            readyCount++;
          }
        });
    
        retryCount = retryCount || 0;
    
        if (elementsPendingReady.length != readyCount && retryCount < 10) {
          retryCount = retryCount + 1;
          setTimeout(initializeExample, 500, elements, callback, elementsPendingReady, retryCount);
        } else {
          callback(elements);
        }
      }
    }

    /**
     * Persistent option with custom event
     */
    initializeExample('#persistent', function(selector) {
      persistentEventOption(document.querySelector(selector));
    });

    /**
     * swap values example
     */
    (function(){
      initializeExample(['#swapExampleBtn', '#swapExampleLeft', '#swapExampleRight'], function(selectors) {
        swapComboboxValues(selectors);
      });
    }());
  }
}

export { Examples }
