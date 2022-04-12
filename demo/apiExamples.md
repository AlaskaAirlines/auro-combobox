

# auro-combobox

## Properties

| Property         | Attribute        | Type      | Default            | Description                                      |
|------------------|------------------|-----------|--------------------|--------------------------------------------------|
| [disabled](#disabled)       | `disabled`       | `Boolean` |                    | If set, disables the combobox.                   |
| [displayValue](#displayValue)   | `displayValue`   | `string`  |                    |                                                  |
| [error](#error)          | `error`          | `Boolean` |                    | Sets a persistent error message (e.g. an error message returned from the server). |
| [optionActive](#optionActive)   | `optionActive`   | `Object`  |                    | Specifies the current active option.             |
| [optionSelected](#optionSelected) | `optionSelected` | `Object`  | null               | Specifies the current selected option.           |
| [placeholder](#placeholder)    | `placeholder`    | `String`  | "Select an option" | Define placeholder text to display before a value is manually selected. |
| [required](#required)       | `required`       | `Boolean` |                    | Populates the `required` attribute on the input. Used for client-side validation. |
| [value](#value)          | `value`          | `String`  | null               | Value selected for the dropdown menu.            |

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
        <auro-menu role="listbox">
          <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
          <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
          <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
          <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
          <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
          <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
          <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
          <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
          <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
          <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
          <auro-menuoption static nomatch>No matching option</auro-menuoption>
        </auro-menu>
      </auro-combobox>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu role="listbox">
    <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
    <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
    <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
    <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
    <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
    <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
    <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
    <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-combobox" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu role="listbox">
      <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
      <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
      <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
      <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
      <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
      <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
      <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
      <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu role="listbox">
    <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
    <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
    <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
    <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
    <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
    <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
    <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
    <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-combobox" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu role="listbox">
      <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
      <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
      <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
      <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
      <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
      <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
      <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
      <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu role="listbox">
    <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
    <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
    <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
    <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
    <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
    <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
    <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
    <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-combobox" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu role="listbox">
      <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
      <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
      <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
      <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
      <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
      <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
      <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
      <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu role="listbox">
    <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
    <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
    <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
    <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
    <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
    <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
    <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
    <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-combobox" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu role="listbox">
      <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
      <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
      <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
      <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
      <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
      <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
      <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
      <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu role="listbox">
    <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
    <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
    <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
    <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
    <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
    <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
    <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
    <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-combobox" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-combobox>
    <span slot="label">Name</span>
    <auro-menu role="listbox">
      <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
      <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
      <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
      <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
      <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
      <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
      <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
      <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
      <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
      <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
      <auro-menuoption static nomatch>No matching option</auro-menuoption>
    </auro-menu>
  </auro-combobox>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu role="listbox">
    <auro-menuoption value="Stop" id="option-0">Stop</auro-menuoption>
    <auro-menuoption value="Stops" id="option-0afds">Stops</auro-menuoption>
    <auro-menuoption value="Stops a lot" id="option-0afdsfdsa">Stops a lot</auro-menuoption>
    <auro-menuoption value="Price" id="option-1">Price</auro-menuoption>
    <auro-menuoption value="Duration" id="option-2">Duration</auro-menuoption>
    <auro-menuoption value="Departure" id="option-3">Departure</auro-menuoption>
    <auro-menuoption value="Arrival" id="option-4">Arrival</auro-menuoption>
    <auro-menuoption value="Prefer Alaska" id="option-5">Prefer Alaska</auro-menuoption>
    <auro-menuoption value="Los Angeles Intl. Airport" id="lax" match="lax">Los Angeles, Intl Airport</auro-menuoption>
    <auro-menuoption event="customeventname" id="option-customevent">Custom Event</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

</auro-accordion>
