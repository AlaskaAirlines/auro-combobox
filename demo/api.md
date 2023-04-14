

# auro-combobox

## Properties

| Property            | Attribute           | Type      | Default     | Description                                      |
|---------------------|---------------------|-----------|-------------|--------------------------------------------------|
| [checkmark](#checkmark)         | `checkmark`         | `Boolean` |             | When attribute is present auro-menu will apply checkmarks to selected options. |
| [disabled](#disabled)          | `disabled`          | `Boolean` |             | If set, disables the combobox.                   |
| [error](#error)             | `error`             | `Boolean` |             | Sets a persistent error state (e.g. an error state returned from the server). |
| [noFilter](#noFilter)          | `noFilter`          | `Boolean` | false       | If set, combobox will not filter menuoptions based in input. |
| [noValidate](#noValidate)        | `noValidate`        | `Boolean` |             | If set, disables auto-validation on blur.        |
| [optionSelected](#optionSelected)    | `optionSelected`    | `Object`  | null        | Specifies the current selected option.           |
| [required](#required)          | `required`          | `Boolean` |             | Populates the `required` attribute on the input. Used for client-side validation. |
| [setCustomValidity](#setCustomValidity) | `setCustomValidity` | `String`  |             | Sets a custom help text message to display for all validityStates. |
| [triggerIcon](#triggerIcon)       | `triggerIcon`       | `Boolean` |             | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| [type](#type)              | `type`              | `String`  |             | Applies the defined value as the type attribute on auro-input. |
| [validity](#validity)          | `validity`          | `String`  | "undefined" | Specifies the `validityState` this element is in. |
| [value](#value)             | `value`             | `String`  | null        | Value selected for the dropdown menu.            |

## Methods

| Method  | Type       | Description                         |
|---------|------------|-------------------------------------|
| [focus](#focus) | `(): void` | Focuses the combobox trigger input. |

## Events

| Event                   | Type               | Description                                      |
|-------------------------|--------------------|--------------------------------------------------|
| `auroCombobox-ready`    | `CustomEvent<any>` | Notifies that the component has finished initializing. |
| `auroCombobox-valueSet` | `CustomEvent<any>` | Notifies that the component has a new value set. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| [helpText](#helpText) | Defines the content of the helpText. |
| [label](#label)    | Defines the content of the label.    |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-combobox>
        <span slot="label">Name</span>
        <auro-menu>
          <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
          <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
          <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
          <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
          <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
          <auro-menuoption static nomatch>No matching option</auro-menuoption>
        </auro-menu>
      </auro-combobox>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

#### Dynamic Menu

This example demonstrates a data driven combobox. The data is used to populate the `auro-menu`. In this example, each time the input's value changes, the data is updated and the menu is recreated.

The menu in this example was populated from data from a country/city API. To keep the data set small, the data in the menu is based off an API call that returns all countries and cities that contain the substring "**germ**" (non case-sensitive) in their name.

<div class="exampleWrapper">
  <!-- HTML example file -->
  <!-- ----------------- -->
  <auro-combobox id="dynamicMenuExample" noFilter>
    <span slot="label">Name</span>
    <!--
      The auro-combobox element requires an empty auro-menu element
      due to the requirements of auro-dropdown and auro-input
    -->
    <auro-menu id="initMenu"></auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<!-- HTML example file -->
<!-- ----------------- -->
<auro-combobox id="dynamicMenuExample" noFilter>
  <span slot="label">Name</span>
  <!--
    The auro-combobox element requires an empty auro-menu element
    due to the requirements of auro-dropdown and auro-input
  -->
  <auro-menu id="initMenu"></auro-menu>
</auro-combobox>
```

```js
// Javascript example file
// -----------------------
import { DynamicData } from './dynamicMenuDataApi';

// Resets the root menu
function resetMenu(root) {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}

// Generates HTML for menu and submenus using country & city data from an external API
function generateHtml(data) {
  const initialMenu = document.querySelector('#initMenu');

  resetMenu(initialMenu);

  for (let index = 0; index < data.length; index++) {
    let country = data[index]['country'];
    let cities = data[index]['cities'];

    generateMenuOptionHtml(initialMenu, country, country);

    for (let indexB = 0; indexB < cities.length; indexB++) {
      let subMenu = document.createElement('auro-menu');

      generateMenuOptionHtml(subMenu, cities[indexB], cities[indexB]);

      initialMenu.appendChild(subMenu);
    }
  };
}

// Helper function that generates HTML for menuoptions
function generateMenuOptionHtml(menu, label, value) {
  let option = document.createElement('auro-menuoption');

  option.value = value;
  option.innerHTML = label;

  menu.appendChild(option);
}

// Main javascript that runs all JS to create example
const dynamicData = new DynamicData();
const dynamicMenuExample = document.querySelector('#dynamicMenuExample');

const input = dynamicMenuExample.shadowRoot.querySelector('auro-dropdown').querySelector('auro-input');

input.addEventListener('input', () => {
  let data = dynamicData.getData();
  data = dynamicData.filterData(data, dynamicMenuExample.value);

  generateHtml(data);
});
```

</auro-accordion>

### Property Examples

#### disabled

If set, disables the combobox.

<div class="exampleWrapper">
  <auro-combobox disabled>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox disabled>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

#### noFilter

If set, combobox will not do suggestion filtering of the menuoptions. This option is useful when the `<auro-menuoption>` elements are being pre-filtered externally to combobox (e.g. using the citysearch API).

<div class="exampleWrapper">
  <auro-combobox noFilter>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox noFilter>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

#### error

Sets a persistent error state (e.g. an error state returned from the server).

<div class="exampleWrapper">
  <auro-combobox error="Custom error message">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox error="Custom error message">
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

#### noValidate

Intended for use with the `required` attribute. If set, disables auto-validation on blur. By using these two attributes in combination the validation for required fields is still computed for forms but no validation messaging will be generated in the UI.

<div class="exampleWrapper">
  <auro-combobox required noValidate>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox required noValidate>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

#### required

Populates the `required` attribute on the input. Used for client-side validation.

<div class="exampleWrapper">
  <auro-combobox required>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox required>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

#### value

Value selected for the dropdown menu.

Can be used in the following ways:
* Preset the value of the combobox to valid menu option
* Set the value of the combobox to invalid menu option
* Reset the value of the combobox to undefined

Note: using a value that does not match a menu option will reset the combobox value to undefined.

<div class="exampleWrapper">
  <auro-button id="valueValidExampleBtn">Set to an existing option</auro-button>
  <auro-button id="valueInvalidExampleBtn">Set to custom value</auro-button>
  <auro-button id="valueUndefinedExampleBtn">Reset</auro-button>
  <br/><br/>
  <auro-combobox id="valueExample" value="Apples">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-button id="valueValidExampleBtn">Set to an existing option</auro-button>
<auro-button id="valueInvalidExampleBtn">Set to custom value</auro-button>
<auro-button id="valueUndefinedExampleBtn">Reset</auro-button>
<br/><br/>
<auro-combobox id="valueExample" value="Apples">
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

```js
const valueExample = document.querySelector('#valueExample');

document.querySelector('#valueValidExampleBtn').addEventListener('click', () => {
  valueExample.value = 'Oranges';
});

document.querySelector('#valueInvalidExampleBtn').addEventListener('click', () => {
  valueExample.value = 'Dragon Fruit';
});

document.querySelector('#valueUndefinedExampleBtn').addEventListener('click', () => {
  valueExample.value = undefined;
});
```

</auro-accordion>

#### type

When defined, the `auro-input` in the combobox trigger will use the defined `type` (e.g. `credit-card`).

<div class="exampleWrapper">
  <auro-combobox type="month-day-year" triggerIcon>
    <span slot="label">Date</span>
    <auro-menu>
      <auro-menuoption value="01/02/2020" id="option-date-0">
        01/02/2020
      </auro-menuoption>
      <auro-menuoption value="05/16/2022" id="option-date-1">
        05/16/2022
      </auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox type="month-day-year" triggerIcon>
  <span slot="label">Date</span>
  <auro-menu>
    <auro-menuoption value="01/02/2020" id="option-date-0">
      01/02/2020
    </auro-menuoption>
    <auro-menuoption value="05/16/2022" id="option-date-1">
      05/16/2022
    </auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Method Examples

#### focus

The focus method will apply focus state to the combobox input field.

<div class="exampleWrapper">
  <auro-button id="focusExampleBtn">Apply focus to combobox</auro-button>
  <br /><br />
  <auro-combobox id="focusExample">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
// export function focus(elem) {
  const focusExample = document.querySelector('#focusExample');
  const focusExampleBtnElem = document.querySelector('#focusExampleBtn');

  focusExampleBtnElem.addEventListener('click', () => {
    focusExample.focus();
  });
// }
```

```html
<auro-button id="focusExampleBtn">Apply focus to combobox</auro-button>
<br /><br />
<auro-combobox id="focusExample">
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Slot Examples

#### helpText

Sets the help text displayed below the trigger. The `helpText` slot can be used to provide additional context for the combobox. When using the `error` property, the `helpText` slot can be used to describe the error.

<div class="exampleWrapper">
  <auro-combobox>
    <span slot="label">Name</span>
    <span slot="helpText">Custom help text</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
      <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
      <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
      <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <span slot="helpText">Custom help text</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>
