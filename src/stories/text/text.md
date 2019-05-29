## Text

The library includes 2 text-components; `<Text>` and `<Heading>`.  
`Text` is regular text.  
`Heading` is heading text.

Montserrat is the default font.

If you want the `Heading`-component to render a different tier of heading, you can use
[Emotion's `as`-prop](https://emotion.sh/docs/styled#as-prop) to pass whatever element you want to render like so:

```js
<Heading as="h3">My Heading</Heading>`
```

### Props

| Prop        | Value              | Notes                                               |
| ----------- | ------------------ | --------------------------------------------------- |
| fontSize?   | `number \| string` |
| fontWeight? | `number \| string` |
| color?      | `string`           | Can be any web-color or color present in the theme. |
