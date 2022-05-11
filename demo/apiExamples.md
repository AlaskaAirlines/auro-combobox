

# auro-combobox

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| [disabled](#disabled)       | `disabled`       | `Boolean` |         | If set, disables the combobox.                   |
| [error](#error)          | `error`          | `Boolean` |         | Sets a persistent error state (e.g. an error state returned from the server). |
| [optionSelected](#optionSelected) | `optionSelected` | `Object`  | null    | Specifies the current selected option.           |
| [required](#required)       | `required`       | `Boolean` |         | Populates the `required` attribute on the input. Used for client-side validation. |
| [triggerIcon](#triggerIcon)    | `triggerIcon`    | `Boolean` |         | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| [type](#type)           | `type`           | `String`  |         | Applies the defined value as the type attribute on auro-input. |
| [value](#value)          | `value`          | `String`  | null    | Value selected for the dropdown menu.            |

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

### Property Examples

#### Disabled

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

#### error

Sets a persistent error state (e.g. an error state returned from the server).

<div class="exampleWrapper">
  <auro-combobox error>
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
<auro-combobox error>
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

Value selected for the dropdown menu. Can be used to pre-set the value of the combobox.

<div class="exampleWrapper">
  <auro-combobox value="Apples">
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
<auro-combobox value="Apples">
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
      <auro-menuoption static nomatch>No matching credit card saved</auro-menuoption>
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
    <auro-menuoption static nomatch>No matching credit card saved</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Slot Examples

#### HelpText

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
<div class="exampleWrapper">
  <auro-combobox error>
    <span slot="label">Name</span>
    <span slot="helpText">Custom error message</span>
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
<auro-combobox error>
  <span slot="label">Name</span>
  <span slot="helpText">Custom error message</span>
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
