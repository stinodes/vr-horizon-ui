import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Text, Heading } from '../../../lib'
import textMd from './text.md'

storiesOf('Text', module)
  .addParameters({
    readme: {
      sidebar: textMd,
    },
  })
  .add('Body', () => {
    const props = {
      fontSize: text('Font size', undefined),
      fontWeight: text('Font weight', undefined),
      color: text('Color', undefined),
    }

    return (
      <Text {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    )
  })
  .add('Heading', () => {
    const props = {
      fontSize: text('Font size', undefined),
      fontWeight: text('Font weight', undefined),
      color: text('Color', undefined),
    }

    return <Heading {...props}>Lorem ipsum dolor </Heading>
  })
