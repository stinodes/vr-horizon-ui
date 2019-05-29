## Customization

Some of the primitives can be customized by passing the correct theme-properties.  
One such example is the `<Button>`-component.

To customize it, pass a `button`-property to the theme. The styles contained there, will be passed to the button.
That way you can override some of the styles!  
These customizations can be either:

- An object containing styling
- A function returning styles for props

**Object-styles** are a really simple way to extend some styles, but are very limiting in some aspects.  
**Functions** allow for more flexibility, as you can return different styles for different props, but are
of course more complicated.

### Example as an object

```js
const theme = {
  button: {
    height: 56,
    borderRadius: 28,
  },
}
```

### Example as a function

This customized style looks at the size-prop to also modify the button's height & radius accordingly.

```js
const theme = {
  button: ({ size }) =>
    size === 'small'
      ? { height: 42, borderRadius: 21 }
      : { height: 56, borderRadius: 28 },
}
```
