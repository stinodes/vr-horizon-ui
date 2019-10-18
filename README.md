# vr-horizon-ui
vr-horizon-ui is a component-library for React, containing the building blocks for VR-Horizon's web-apps.  
The components are made using [`emotion`](https://github.com/emotion-js/emotion) and [`styled-system`](https://github.com/styled-system/styled-system). These libraries allow us to create styles tightly coupled to components, yet still extendible via both props or even more styling!  

On top of the components, there are several hooks and general utilities built in for you to use.

## Getting started
To get started, install VR-Horizon UI and the required peer-dependencies.  
**Using yarn**
```
$ yarn add vr-horizon-ui @emotion/core @emotion/styled emotion-theming
```
**Using npm**
```
$ npm install vr-horizon-ui @emotion/core @emotion/styled emotion-theming
```

Next, move into your project, and add the theme-provider somewhere at the top of your render-tree.
```
import {ThemeProvider} from 'emotion-theming'
import {createTheme} from 'vr-horizon-ui'

...

ReactDOM.render(
  <ThemeProvider theme={createTheme({})}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
```
You can, of course, move this provider to wherever you declare them. Whatever works, as long it is high enough up the tree.

Now you can start rendering (themed) components anywhere.

## Running locally 
To build the library and run the example-app locally, start by cloning the repository and install dependencies using the `$ yarn install-all` command.  
This installs dependencies for both projects.  
Next, run `$ yarn dev`. This will start a process that builds the lib, and one that runs the packager for the app. Give it a moment to build the library, and have a look around.