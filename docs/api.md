# auro-combobox

## Properties

| Property            | Attribute           | Type      | Default     | Description                                      |
|---------------------|---------------------|-----------|-------------|--------------------------------------------------|
| `checkmark`         | `checkmark`         | `Boolean` |             | When attribute is present auro-menu will apply checkmarks to selected options. |
| `disabled`          | `disabled`          | `Boolean` |             | If set, disables the combobox.                   |
| `error`             | `error`             | `Boolean` |             | Sets a persistent error state (e.g. an error state returned from the server). |
| `noFilter`          | `noFilter`          | `Boolean` | false       | If set, combobox will not filter menuoptions based in input. |
| `noValidate`        | `noValidate`        | `Boolean` |             | If set, disables auto-validation on blur.        |
| `optionSelected`    | `optionSelected`    | `Object`  | null        | Specifies the current selected option.           |
| `required`          | `required`          | `Boolean` |             | Populates the `required` attribute on the input. Used for client-side validation. |
| `setCustomValidity` | `setCustomValidity` | `String`  |             | Sets a custom help text message to display for all validityStates. |
| `triggerIcon`       | `triggerIcon`       | `Boolean` |             | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| `type`              | `type`              | `String`  |             | Applies the defined value as the type attribute on auro-input. |
| `validity`          | `validity`          | `String`  | "undefined" | Specifies the `validityState` this element is in. |
| `value`             | `value`             | `String`  | null        | Value selected for the dropdown menu.            |

## Methods

| Method  | Type       | Description                         |
|---------|------------|-------------------------------------|
| `focus` | `(): void` | Focuses the combobox trigger input. |

## Events

| Event                       | Type               | Description                                      |
|-----------------------------|--------------------|--------------------------------------------------|
| `auroCombobox-ready`        | `CustomEvent<any>` | Notifies that the component has finished initializing. |
| `auroCombobox-valueSet`     | `CustomEvent<any>` | Notifies that the component has a new value set. |
| `auroFormElement-validated` |                    | Notifies that the component value(s) have been validated. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
