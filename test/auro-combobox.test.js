import { fixture, html, expect, waitUntil, elementUpdated } from '@open-wc/testing';
import '../src/auro-combobox.js';
import '@aurodesignsystem/auro-input';
import '@aurodesignsystem/auro-dropdown';
import '@aurodesignsystem/auro-menu';

describe('auro-combobox', () => {
  it('auro-combobox custom element is defined', async () => {
    const el = await !!customElements.get("auro-combobox");

    await expect(el).to.be.true;
  });

  // it('auro-combobox is accessible', async () => {
  //   const el = await fixture(html`
  //     <auro-combobox></auro-combobox>
  //   `);

  //   await expect(el).to.be.accessible();
  // });

  it('noFilter attribute results in no suggestion filtering', async () => {
    const el = await noFilterFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let visibleMenuOptions = [];

    setInputValue(el, 'pp');

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (!menuOptions[oIndex].hasAttribute('hidden')) {
        visibleMenuOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(visibleMenuOptions.length).to.be.equal(2);
  });

  it('can programmatically apply focus to input', async () => {
   const el = await defaultFixture();

    const input = el.shadowRoot.querySelector('auro-input');

    el.focus();

    await expect(el.shadowRoot.activeElement).to.be.equal(input);
  });

  it('shows the bib on click only when a value is typed', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
    const trigger = dropdown.querySelector('[slot="trigger"]');
    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.false;
    setInputValue(el, 'p');
    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;
  });

  it('shows the bib when pressing enter and a value is typed', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');

    // Validate bib is not shown when hitting enter but there is no value in the input
    el.focus();
    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Enter'
    }));
    await expect(dropdown.isPopoverVisible).to.be.false;

    // Validate bib is shown when hitting enter but there is a value in the input
    setInputValue(el, 'pp');
    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Enter'
    }));

    await expect(dropdown.isPopoverVisible).to.be.true;
  });

  it('hides the bib when there are no available options', async () => {
    const el = await defaultFixture();
    const dropdown = el.shadowRoot.querySelector('auro-dropdown');

    setInputValue(el, 'zzzzzz');
    await expect(dropdown.isPopoverVisible).to.be.false;
  });

  it('hides the bib when making a selection', async () => {
    const el = await defaultFixture();
    await waitUntil(() => el.ready);

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    setInputValue(el, 'p');
    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    el.value = 'Apples';

    await waitUntil(() => el.optionSelected);

    await expect(dropdown.isPopoverVisible).to.be.false;
  });

  it('hides the bib when tabbing away from combobox', async () => {
    const el = await defaultFixture();
    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    el.focus();

    setInputValue(el, 'p');
    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Tab'
    }));

    await expect(dropdown.isPopoverVisible).to.be.false;
  });

  it('hides the bib when selecting an option with a custom event', async () => {
    const el = await customEventFixture();
    await waitUntil(() => el.ready);

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    setInputValue(el, 'a');

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowDown'
    }));

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Enter'
    }));

    await expect(dropdown.isPopoverVisible).to.be.false
  });

  it('navigates menu with up and down arrow keys', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');

    // Validate bib is shown when hitting enter but there is a value in the input
    setInputValue(el, 'pp');
    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Enter'
    }));

    await expect(dropdown.isPopoverVisible).to.be.true;

    const menu = el.querySelector('auro-menu');
    const menuOptions = menu.querySelectorAll('auro-menuoption');

    setInputValue(el, 'a');

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowDown'
    }));

    await expect(el.optionActive).to.be.equal(menuOptions[0]);
    await expect(menuOptions[0].classList.contains('active')).to.be.true;
    await expect(menuOptions[1].classList.contains('active')).to.be.false;

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowDown'
    }));

    await expect(el.optionActive).to.be.equal(menuOptions[1]);
    await expect(menuOptions[0].classList.contains('active')).to.be.false;
    await expect(menuOptions[1].classList.contains('active')).to.be.true;


    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowUp'
    }));

    await expect(el.optionActive).to.be.equal(menuOptions[0]);
    await expect(menuOptions[0].classList.contains('active')).to.be.true;
    await expect(menuOptions[1].classList.contains('active')).to.be.false;
  });

  it('typing filters list of options', async () => {
    const el = await defaultFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let visibleMenuOptions = [];

    setInputValue(el, 'pp');

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (!menuOptions[oIndex].hasAttribute('hidden')) {
        visibleMenuOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(visibleMenuOptions.length).to.be.equal(1);
    await expect(visibleMenuOptions[0].innerText).to.be.equal('Apples');
  });

  it('using the nomatch attribute with a matching value', async () => {
    const el = await noMatchFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let visibleMenuOptions = [];

    setInputValue(el, 'pp');

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (!menuOptions[oIndex].hasAttribute('hidden')) {
        visibleMenuOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(visibleMenuOptions.length).to.be.equal(1);
    await expect(visibleMenuOptions[0].innerText).to.be.equal('Apples');
  });

  it('using the nomatch attribute with no matching value', async () => {
    const el = await noMatchFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let visibleMenuOptions = [];

    setInputValue(el, 'zzz');

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (!menuOptions[oIndex].hasAttribute('hidden')) {
        visibleMenuOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(visibleMenuOptions.length).to.be.equal(1);
    await expect(visibleMenuOptions[0].innerText).to.be.equal('No Matching Option');
  });

  it('using the persistent attribute always displays the persistent option', async () => {
    const el = await persistentFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let visibleMenuOptions = [];

    setInputValue(el, 'pp');

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (!menuOptions[oIndex].hasAttribute('hidden')) {
        visibleMenuOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(visibleMenuOptions.length).to.be.equal(2);
    await expect(visibleMenuOptions[0].innerText).to.be.equal('Apples');
    await expect(visibleMenuOptions[1].innerText).to.be.equal('Persistent');
  });

  it('using the suggest attribute matches additional options', async () => {
    const el = await suggestFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let visibleMenuOptions = [];

    setInputValue(el, 'pp');

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (!menuOptions[oIndex].hasAttribute('hidden')) {
        visibleMenuOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(visibleMenuOptions.length).to.be.equal(2);
    await expect(visibleMenuOptions[0].innerText).to.be.equal('Apples');
    await expect(visibleMenuOptions[1].innerText).to.be.equal('Oranges');
  });

  it('makes a selection programmatically', async () => {
    const el = await defaultFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let selectedOptions = [];

    el.value = 'Apples';

    await waitUntil(() => el.optionSelected);

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (menuOptions[oIndex].hasAttribute('selected')) {
        selectedOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(el.value).to.be.equal('Apples');
    await expect(el.optionSelected).to.be.equal(selectedOptions[0]);
  });

  it('make invalid selection programmatically results in error ui', async () => {
    const el = await presetValueFixture();
    await waitUntil(() => el.ready);

    el.value = 'Dragon Fruit';

    await elementUpdated(el);

    await expect(el.optionSelected).to.be.equal(undefined);
    await expect(el.displayValue).to.be.equal('Dragon Fruit');
    await expect(el.error).to.be.true;
  });

  it('reset selection value programmatically', async () => {
    const el = await presetValueFixture();
    await waitUntil(() => el.ready);

    el.value = undefined;

    await elementUpdated(el);

    await expect(el.optionSelected).to.be.equal(undefined);
  });

  it('makes a selection using the keyboard', async () => {
    const el = await defaultFixture();
    const menu = el.querySelector('auro-menu');
    const menuOptions = menu.querySelectorAll('auro-menuoption');

    setInputValue(el, 'a');

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Enter'
    }));

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowDown'
    }));

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Enter'
    }));

    await expect(el.optionSelected).to.be.equal(menuOptions[0]);
  });

  it('throws an error state when trying to programmatically set a value that doesn\'t match an option', async () => {
    const el = await defaultFixture();
    await waitUntil(() => el.ready);

    const menu = el.querySelector('auro-menu')

    await expect(el.hasAttribute('error')).to.be.false;

    el.value = 'Dragon Fruit';

    await elementUpdated(el);

    await expect(el.hasAttribute('error')).to.be.true;
  });

  it('handles the required state being set', async () => {
    const el = await requiredFixture();

    // error applied on blur
    el.focus();
    el.shadowRoot.activeElement.blur();
    let hasError = el.hasAttribute('error');
    await expect(hasError).to.be.true;

    // error applied for typed value that doesn't match an option
    setInputValue(el, 'pp');
    hasError = el.hasAttribute('error');
    await expect(hasError).to.be.true;

    // error applied when changing to empty value
    setInputValue(el, 'pp');
    setInputValue(el, '');
    hasError = el.hasAttribute('error');
    await expect(hasError).to.be.true;
  });

  it('default to nocheckmark on selected option', async () => {
    const el = await defaultFixture();

    const menu = el.querySelector('auro-menu');
    await expect(menu.hasAttribute('nocheckmark')).to.be.true;
  });

  it('selected options have checkmark when checkmark attribute is present', async () => {
    const el = await checkmarkFixture();

    const menu = el.querySelector('auro-menu');
    await expect(menu.hasAttribute('nocheckmark')).to.be.false;
  });
});

async function defaultFixture() {
  return await fixture(html`
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function presetValueFixture() {
  return await fixture(html`
  <auro-combobox value="Apples">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function checkmarkFixture() {
  return await fixture(html`
  <auro-combobox checkmark>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}


async function suggestFixture() {
  return await fixture(html`
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" suggest="Apples" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function requiredFixture() {
  return await fixture(html`
  <auro-combobox required>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function noMatchFixture() {
  return await fixture(html`
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption nomatch id="option-noMatch">No Matching Option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function persistentFixture() {
  return await fixture(html`
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption persistent id="option-noMatch">Persistent</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function customEventFixture() {
  return await fixture(html`
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption event="mycustomevent">Add new fruit</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

async function noFilterFixture() {
  return await fixture(html`
  <auro-combobox noFilter>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-combobox>
  `);
}

function setInputValue(el, value) {
  const auroInput = el.shadowRoot.querySelector('auro-input');
  const input = auroInput.shadowRoot.querySelector('input');

  input.value = value;
  input.dispatchEvent(new InputEvent('input'));
  auroInput.dispatchEvent(new Event('input', {bubbles:true}));
}
