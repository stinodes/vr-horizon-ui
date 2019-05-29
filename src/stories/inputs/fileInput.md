## File Input

A file-input with drag 'n drop support. Select or drop a file to change the value, or clear by pressing the X-button.
It's composed of multiple `<Button>` components, and sports some of those props as well.

The actions tab shows you a logged event, illustrating where the selected file resides.

### Props

| Prop         | Value              | Notes      |
| ------------ | ------------------ | ---------- |
| name         | `string`           |            |
| value        | `string`           |            |
| onChange     | `(event) => any`   |            |
| placeholder? | `string`           |            |
| disabled?    | `boolean`          |
| size?        | `small \| regular` |
| bg?          | `string`           | color-prop |
| color?       | `string`           | color-prop |
