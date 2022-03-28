<!-- <ul role="listbox" tabindex="0" aria-activedescendant="minnie">
  <li role="option" id="mickey">Mickey</li>
  <li role="option" id="minnie" class="selected">Minnie</li>
  <li role="option" id="donald">Donald</li>
  <li role="option" id="daisy">Daisy</li>
  <li role="option" id="goofy">Goofy</li>
</ul> -->

# combobox

`<auro-combobox>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of ...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.

## auro-combobox use cases

The `<auro-combobox>` element should be used in situations where users may:

* ...
* ...
* ...

## Example(s)

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
  </auro-menu>
</auro-combobox>
```

</auro-accordion>
