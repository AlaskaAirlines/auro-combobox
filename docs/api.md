# auro-combobox

## Properties

| Property         | Attribute        | Type      | Default            | Description                                      |
|------------------|------------------|-----------|--------------------|--------------------------------------------------|
| `disabled`       | `disabled`       | `Boolean` |                    | If set, disables the combobox.                   |
| `displayValue`   | `displayValue`   | `string`  |                    |                                                  |
| `error`          | `error`          | `Boolean` |                    | Sets a persistent error message (e.g. an error message returned from the server). |
| `optionActive`   | `optionActive`   | `Object`  |                    | Specifies the current active option.             |
| `optionSelected` | `optionSelected` | `Object`  | null               | Specifies the current selected option.           |
| `placeholder`    | `placeholder`    | `String`  | "Select an option" | Define placeholder text to display before a value is manually selected. |
| `required`       | `required`       | `Boolean` |                    | Populates the `required` attribute on the input. Used for client-side validation. |
| `triggerIcon`    | `triggerIcon`    | `Boolean` |                    | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| `type`           | `type`           | `String`  |                    | Applies the defined value as the type attribute on auro-input. |
| `value`          | `value`          | `String`  | null               | Value selected for the dropdown menu.            |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
