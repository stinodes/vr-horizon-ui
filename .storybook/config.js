import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'
import { ThemeProvider } from '../lib'

addParameters({
  readme: {
    codeTheme: 'duotone-light',
    content: `
<!-- STORY -->
> Documentation is in the **readme**-panel.  
> Interactivity is in the **knobs**-panel.
`,
  },
})

let hasAppended = false
const withPortalRoot = story => {
  if (!hasAppended) {
    const element = document.createElement('div')
    element.setAttribute('id', 'portal-root')
    document.body.appendChild(element)
    hasAppended = true
  }
  return story()
}
const withTheme = story => <ThemeProvider>{story()}</ThemeProvider>
addDecorator(addReadme)
addDecorator(withPortalRoot)
addDecorator(withTheme)
addDecorator(withKnobs)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
