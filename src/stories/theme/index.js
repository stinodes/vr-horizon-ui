// @jsx jsx
import { jsx } from '@emotion/core'
import React from 'react'
import { repeat } from 'ramda'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Flex, ThemeProvider, Button, Text } from '../../../lib'

import themeMd from './theme.md'
import colorsMd from './colors.md'
import spacesMd from './spaces.md'
import customizeMd from './customize.md'

const colors = [
  'blues',
  'teals',
  'greens',
  'yellows',
  'reds',
  'lights',
  'darks',
]
storiesOf('Theming', module)
  .addDecorator(withKnobs)
  .add('Adding the theme', () => null, {
    readme: {
      sidebar: themeMd,
    },
  })
  .add(
    'Colors',
    () => {
      return (
        <ThemeProvider>
          <Flex flexDirection="column">
            {colors.map(color => (
              <Flex height={50}>
                {repeat('', 5).map((v, i) => (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flex={1}
                    bg={`${color}.${i}`}>
                    <Text
                      fontSize={10}
                      fontWeight="600"
                      color="white"
                      css={{ textShadow: 'rgb(0, 0, 0, .3) 0 0 3px' }}>
                      {color}.{i}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            ))}
          </Flex>
        </ThemeProvider>
      )
    },
    {
      readme: {
        sidebar: colorsMd,
      },
    },
  )
  .add('Spaces', () => null, {
    readme: {
      sidebar: spacesMd,
    },
  })
  .add(
    'Customize components',
    () => {
      const objTheme = {
        button: {
          padding: '0 24px',
          height: 56,
          borderRadius: 28,
        },
      }
      const funcTheme = {
        button: ({ size }) => [
          size === 'small'
            ? { height: 42, borderRadius: 21 }
            : {
                height: 56,
                borderRadius: 28,
              },
          { padding: '0 24px' },
        ],
      }
      const useFunc = boolean('Use function theme', false)
      const small = boolean('Small', false)

      return (
        <ThemeProvider theme={useFunc ? funcTheme : objTheme}>
          <Button size={small && 'small'}>Click me!</Button>
        </ThemeProvider>
      )
    },
    {
      readme: {
        sidebar: customizeMd,
      },
    },
  )
