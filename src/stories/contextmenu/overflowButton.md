## Overflow Button

An overflow button component. When clicked, it displays a context-menu, based on the position of the button.  
Pass in `<ContextMenuItem>` as children, with interactive props similar to buttons.

### Overflow Button Props

The overflow-button takes the same props as a regular `<Button>` component, on top of the following:

| Prop   | Value           | Notes                                       |
| ------ | --------------- | ------------------------------------------- |
| icon?  | `ComponentType` | Icon to render. Will use `Dots` by default. |
| width? | `number`        | The width of the context-menu.              |

### Context Menu Item Props

| Prop     | Value          | Notes                                                  |
| -------- | -------------- | ------------------------------------------------------ |
| bg?      | `string`       | Can be any web-color or color present in the theme.    |
| color?   | `string`       | Can be any web-color or color present in the theme.    |
| onClick? | `Event => any` | On-click handler.                                      |
| href?    | `string`       | A path to navigate to. Will render an `a`-tag instead. |
