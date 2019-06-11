import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import contextMenuMd from './contextMenu.md'
import overflowButtonMd from './overflowButton.md'
import {
  Flex,
  OverflowButton,
  ContextMenu,
  ContextMenuItem,
} from '../../../lib'

storiesOf('ContextMenu', module)
  .add(
    'default',
    () => {
      const visible = boolean('Visible', true)
      const x = number('X coordinate', 100)
      const y = number('Y coordinate', 100)
      return (
        <ContextMenu coordinates={visible ? { x, y } : null} bg="white">
          <ContextMenuItem onClick={action('Pressed "More info"')}>
            More info
          </ContextMenuItem>
          <ContextMenuItem onClick={action('Pressed "Edit"')}>
            Edit
          </ContextMenuItem>
          <ContextMenuItem onClick={action('Pressed "Delete"')}>
            Delete
          </ContextMenuItem>
        </ContextMenu>
      )
    },
    { readme: { sidebar: contextMenuMd } },
  )
  .add(
    'OverflowButton',
    () => {
      return (
        <Flex justifyContent="flex-end" maxWidth={300} pb={100}>
          <OverflowButton>
            <ContextMenuItem onClick={action('Pressed "More info"')}>
              More info
            </ContextMenuItem>
            <ContextMenuItem onClick={action('Pressed "Edit"')}>
              Edit
            </ContextMenuItem>
            <ContextMenuItem onClick={action('Pressed "Delete"')}>
              Delete
            </ContextMenuItem>
          </OverflowButton>
        </Flex>
      )
    },
    { readme: { sidebar: overflowButtonMd } },
  )
