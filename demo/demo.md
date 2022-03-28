<!-- <ul role="listbox" tabindex="0" aria-activedescendant="minnie">
  <li role="option" id="mickey">Mickey</li>
  <li role="option" id="minnie" class="selected">Minnie</li>
  <li role="option" id="donald">Donald</li>
  <li role="option" id="daisy">Daisy</li>
  <li role="option" id="goofy">Goofy</li>
</ul> -->

# combobox

`<auro-combobox>` is the combination of [dropdown](http://auro.alaskaair.com/components/auro/dropdown), [input](http://auro.alaskaair.com/components/auro/input), and [menu](http://auro.alaskaair.com/components/auro/menu) and allows users to filter search results from a predefined list as they type. When the user starts typing in the text input, a dropdown of a menu shows up to display options that match the user’s search.

## auro-combobox use cases

The `<auro-combobox>` element should be used in situations where users may:

* Search
  * Airports: user looks for a specific airport by searching for the city name or airport code
  * Site wide: user searches for a topic site wide and combobox makes suggestions on searchable results
* Filter
  * Options: user chooses filters for their search by using combobox
* Select
  * Quantity: user types a quantity to select an option within a range (for example, the user may be limited to 2-34)

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
