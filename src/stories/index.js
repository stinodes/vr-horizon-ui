// @jsx jsx
import { jsx } from '@emotion/core'
import React from 'react'
import { values, findLastIndex, prop, repeat } from 'ramda'
import { animated, useSpring } from 'react-spring'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, select, text, boolean } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

import { Flex, Heading, Text, Card } from '../../lib'

import { Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to VR-Horizon UI', () => (
  <Flex flex={1} justifyContent="center" alignItems="center">
    <Card p={3} maxWidth={516} width={1} border shadow>
      <Flex justifyContent="center" mb={3}>
        <Heading>VR-Horizon UI</Heading>
      </Flex>
      <Flex flexDirection="column">
        <Text css={{ paddingBottom: 8 }} fontSize={14} fontWeight="600">
          This is a storybook containing the main components used in{' '}
          <Text as="span" fontSize={14} color="blues.3" fontWeight="700">
            VR-Horizon
          </Text>{' '}
          front-end projects.
        </Text>
        <Text css={{ paddingBottom: 8 }} fontSize={14} fontWeight="600">
          Use the "knobs" to edit components' props, and play around with them
          here!
        </Text>
        <Text css={{ paddingBottom: 8 }} fontSize={14} fontWeight="600">
          Get started by navigating to one of the component demos in the
          sidebar!
        </Text>
      </Flex>
    </Card>
  </Flex>
))

require('./theme')
require('./text')
require('./buttons')
require('./inputs')
require('./messageBox')
require('./modal')
require('./table')
require('./contextmenu')
