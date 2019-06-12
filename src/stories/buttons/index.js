import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import buttonsMd from './buttons.md'
import { Button } from '../../../lib'

storiesOf('Button', module).add(
  'default',
  () => {
    const props = {
      size: select(
        'Size',
        { '"small"': 'small', '"regular"': null, '"circle"': 'circle' },
        null,
      ),
      disabled: boolean('Disabled', false),
      important: boolean('Important', false),
      raised: boolean('Raised', false),
    }
    return (
      <Button {...props} onClick={action('clicked')}>
        Click me!
      </Button>
    )
  },
  { readme: { sidebar: buttonsMd } },
)
