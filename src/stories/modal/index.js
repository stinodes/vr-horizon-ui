import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import modalMd from './modal.md'
import { Modal, Flex, Text, Button } from '../../../lib'

storiesOf('Modal', module).add(
  'default',
  () => {
    const visible = boolean('Visible', true)

    return (
      <Modal
        visible={visible}
        title="Modal example"
        onRequestClose={action('onRequestClose')}>
        <Flex p={3}>
          <Text>
            This is a modal! Use the knobs to edit its visibility state.
          </Text>
        </Flex>
        <Flex p={3}>
          <Button onClick={action('onClick')}>Confirm</Button>
        </Flex>
      </Modal>
    )
  },
  { readme: { sidebar: modalMd } },
)
