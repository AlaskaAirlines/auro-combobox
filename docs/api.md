# auro-combobox

## Properties

| Property         | Attribute        | Type     | Default            | Description                                      |
|------------------|------------------|----------|--------------------|--------------------------------------------------|
| `displayValue`   | `displayValue`   | `string` |                    |                                                  |
| `optionSelected` | `optionSelected` | `Object` | null               | Specifies the current selected option.           |
| `placeholder`    | `placeholder`    | `String` | "Select an option" | Define placeholder text to display before a value is manually selected. |
| `value`          | `value`          | `String` | null               | Value selected for the dropdown menu.            |

## Methods

| Method              | Type       |
|---------------------|------------|
| `handleMenuOptions` | `(): void` |

## Slots

| Name         | Description                            |
|--------------|----------------------------------------|
|              | Default slot for the menu content.     |
| `helperText` | Defines the content of the helperText. |
| `label`      | Defines the content of the label.      |
