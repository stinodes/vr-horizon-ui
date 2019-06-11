import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import messageBoxMd from './messageBox.md'
import { MessageBox } from '../../../lib'

storiesOf('MessageBox', module).add(
  'default',
  () => {
    const bg = text('Background color', 'reds.3')
    const textColor = text('Text color', 'white')
    const message = text('Message', 'Successfully showing you a message!')
    return <MessageBox bg={bg} color={textColor} message={message} />
  },
  { readme: { sidebar: messageBoxMd } },
)
