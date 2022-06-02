# auro-combobox

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `disabled`       | `disabled`       | `Boolean` |         | If set, disables the combobox.                   |
| `error`          | `error`          | `Boolean` |         | Sets a persistent error state (e.g. an error state returned from the server). |
| `noValidate`     | `noValidate`     | `Boolean` |         | If set, disables auto-validation on blur.        |
| `optionSelected` | `optionSelected` | `Object`  | null    | Specifies the current selected option.           |
| `required`       | `required`       | `Boolean` |         | Populates the `required` attribute on the input. Used for client-side validation. |
| `triggerIcon`    | `triggerIcon`    | `Boolean` |         | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| `type`           | `type`           | `String`  |         | Applies the defined value as the type attribute on auro-input. |
| `value`          | `value`          | `String`  | null    | Value selected for the dropdown menu.            |

## Events

| Event                | Type               | Description                                      |
|----------------------|--------------------|--------------------------------------------------|
| `auroCombobox-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
