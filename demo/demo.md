# Suggest

`<auro-suggest>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of ...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.

## auro-suggest use cases

The `<auro-suggest>` element should be used in situations where users may:

* ...
* ...
* ...

## Additional Information

> Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum libero ipsum, ac tempor sapien blandit in. Nam tincidunt non felis molestie varius.

|convallis|tristique|nisl dignissim|eleifend|
|---|---|---|---|
|√|√|||
|||√|√|

Aenean at blandit lorem. Fusce imperdiet mi nec gravida maximus. Quisque nisl libero, condimentum in nisi a, imperdiet lacinia arcu.

```javascript
toggleDialog = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = 'hidden';
  dialog.removeAttribute("open");
  dialog.setAttribute("open", true);
}

toggleDialogClose = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = '';
  dialog.removeAttribute("open");
}
```

## Example(s)

<div class="exampleWrapper">
  <auro-suggest>
    <auro-menu>
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption data-value="Price">Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
      <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-suggest>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-suggest>
  <auro-menu>
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-suggest>
```

</auro-accordion>
