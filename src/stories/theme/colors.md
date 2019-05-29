## Colors

The included base-theme contains several color-ranges. Each range has 5 shades of said color, and can be referenced
in color-props as a string (e.g. \`color="blues.2"\`). Lower indexes are darker, whereas 4 is the lightest.

### Colors in theme

The theme has a color-property. You can extend this by adding it to your own custom theme. It will then be merged with
our base theme!  
Of course, colors don't **have** to be ranges. You can also add single colors to use in your components.

Adding colors could go as follows:

```js
const purples = ['light-purple', 'med-purple', 'dark-purple']
const theme = {
  colors: {
    purples,
    accent: purples[1],
  },
}
```

**Example usage to render a blue square:**

```js
<Box width={20} height={20} bg="blues.2" />
```
