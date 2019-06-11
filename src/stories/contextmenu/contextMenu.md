## Context Menu

A context-menu component, taking coordinates and is displayed in a **Portal** at the given position.  
Pass in `<ContextMenuItem>` as children, with interactive props similar to buttons.

### Context Menu Props

| Prop           | Value                     | Notes                                                         |
| -------------- | ------------------------- | ------------------------------------------------------------- |
| bg?            | `string`                  | Can be any web-color or color present in the theme.           |
| shadow?        | `boolean`                 | Whether or not to display shadows                             |
| coordinates?   | `?{x: number, y: number}` | If present, the menu will be shown at the passed coordinates. |
| onRequestClose | `() => any`               | A function called when the menu should be closed.             |

### Context Menu Item Props

| Prop     | Value          | Notes                                                                                                                                |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| bg?      | `string`       | Can be any web-color or color present in the theme.                                                                                  |
| color?   | `string`       | Can be any web-color or color present in the theme.                                                                                  |
| onClick? | `Event => any` | On-click handler.                                                                                                                    |
| to?      | `string`       | A (relative) path to navigate to. Will use [`@reach/router`](https://www.github.com/reach/router)'s Link component instead of Button |
| href?    | `string`       | A path to navigate to. Will render an `a`-tag instead.                                                                               |
