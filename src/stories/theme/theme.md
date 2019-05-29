## Theme

Before using **VR-Horizon UI**, you'll need to add our theming provider to the
very top of your app, before you render any of our components.

This is needed to pass our (or your customized) theme to the included components.  
Optionally, you can pass your customized theme to the Provider as a `theme`-prop.  
To see how you can customize the theme, read the rest of our theming-guide!  
You can add the provider as follows:

```js
// App.js
import React from 'react'
import { ThemeProvider } from 'vr-horizon-ui'

// ...

const App = () => {
  return (
    <ThemeProvider>
      <Text>Hello VR-Horizon!</Text>
    </ThemeProvider>
  )
}

// ...

export default App
```
