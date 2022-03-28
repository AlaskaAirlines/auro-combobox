

# auro-suggest

## Properties

| Property         | Attribute        | Type     | Default            | Description                                      |
|------------------|------------------|----------|--------------------|--------------------------------------------------|
| [displayValue](#displayValue)   | `displayValue`   | `string` |                    |                                                  |
| [optionSelected](#optionSelected) | `optionSelected` | `Object` | null               | Specifies the current selected option.           |
| [placeholder](#placeholder)    | `placeholder`    | `String` | "Select an option" | Define placeholder text to display before a value is manually selected. |
| [value](#value)          | `value`          | `String` | null               | Value selected for the dropdown menu.            |

## Methods

| Method              | Type       |
|---------------------|------------|
| [handleMenuOptions](#handleMenuOptions) | `(): void` |

## Slots

| Name         | Description                            |
|--------------|----------------------------------------|
|              | Default slot for the menu content.     |
| [helperText](#helperText) | Defines the content of the helperText. |
| [label](#label)      | Defines the content of the label.      |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-suggest>
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
        </auro-menu>
      </auro-suggest>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
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
  </auro-menu>
</auro-suggest>
```

</auro-accordion>

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-suggest" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-suggest>
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
    </auro-menu>
  </auro-suggest>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
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
  </auro-menu>
</auro-suggest>
```

</auro-accordion>

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-suggest" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-suggest>
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
    </auro-menu>
  </auro-suggest>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
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
  </auro-menu>
</auro-suggest>
```

</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-suggest" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-suggest>
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
    </auro-menu>
  </auro-suggest>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
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
  </auro-menu>
</auro-suggest>
```

</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-suggest" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-suggest>
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
    </auro-menu>
  </auro-suggest>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
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
  </auro-menu>
</auro-suggest>
```

</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-suggest" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-suggest>
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
    </auro-menu>
  </auro-suggest>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
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
  </auro-menu>
</auro-suggest>
```

</auro-accordion>
