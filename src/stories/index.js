// @jsx jsx
import { jsx } from '@emotion/core'
import React from 'react'
import { repeat } from 'ramda'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, select, text, boolean } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

import {
  baseTheme,
  Button,
  Label,
  FileInput,
  LabeledInput,
  Input,
  Select,
  ThemeProvider,
  MessageBox,
  Modal,
  Flex,
  Heading,
  Text,
  Card,
} from '../../lib'

import { Welcome } from '@storybook/react/demo'

const withTheme = story => <ThemeProvider>{story()}</ThemeProvider>

const InputState = <Val: any>({
  initialValue,
  children,
}: {
  initialValue: Val,
  children: ({ value: Val, setValue: Val => any }) => React.Node,
}) => {
  const [value, setValue] = React.useState(initialValue)
  return children({ value, setValue })
}

storiesOf('Welcome', module)
  .addDecorator(withTheme)
  .add('to VR-Horizon UI', () => (
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

const colors = [
  'blues',
  'teals',
  'greens',
  'yellows',
  'reds',
  'lights',
  'darks',
]
storiesOf('Colors', module)
  .addDecorator(withTheme)
  .addDecorator(withKnobs)
  .add('Overview', () => {
    return (
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
    )
  })

storiesOf('Text', module)
  .addDecorator(withTheme)
  .addDecorator(withKnobs)
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

storiesOf('Button', module)
  .addDecorator(withTheme)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      size: select('Size', { '"small"': 'small', '"regular"': null }, null),
      disabled: boolean('Disabled', false),
      important: boolean('Important', false),
      raised: boolean('Raised', false),
    }
    return (
      <Button {...props} onClick={action('clicked')}>
        Click me!
      </Button>
    )
  })

storiesOf('Inputs', module)
  .addDecorator(withTheme)
  .addDecorator(withKnobs)
  .add('Label', () => {
    const children = text('Text', 'Label text')
    return <Label>{children}</Label>
  })
  .add('Input', () => {
    const placeholder = text('Placeholder', 'First name...')
    const error = boolean('Is invalid', false)
    const type = text('Type', 'text')

    return (
      <Input
        name="firstName"
        onChange={action('changed')}
        type={type}
        placeholder={placeholder}
        error={error}
      />
    )
  })
  .add('LabeledInput', () => {
    const label = text('Label', 'First name')
    const error = boolean('Is invalid', false)
    const type = text('Type', 'text')

    return (
      <LabeledInput
        name="firstName"
        onChange={action('changed')}
        type={type}
        label={label}
        error={error}
      />
    )
  })
  .add('FileInput', () => {
    const size = select('Size', { '"small"': 'small', '"regular"': null }, null)
    const placeholder = text('Placeholder', 'Profile picture')
    return (
      <InputState>
        {({ value, setValue }) => (
          <FileInput
            size={size}
            name="profilePicture"
            onChange={v => {
              action('changed')(v)
              setValue(v.target.value)
            }}
            placeholder={placeholder}
            value={value}
          />
        )}
      </InputState>
    )
  })
  .add('Select', () => {
    const placeholder = text('Placeholder', 'Select country')
    const options = [
      { value: 'be', label: 'Belgium' },
      { value: 'nl', label: 'Netherlands' },
      { value: 'lux', label: 'Luxembourg' },
    ]
    return (
      <Select
        name="country"
        options={options}
        placeholder={placeholder}
        onChange={action('changed')}
      />
    )
  })

storiesOf('MessageBox', module)
  .addDecorator(withTheme)
  .addDecorator(withKnobs)
  .add('default', () => {
    const bg = color('Background color', baseTheme.colors.accent)
    const textColor = color('Text color', 'white')
    const message = text('Message', 'Successfully showing you a message!')
    return <MessageBox bg={bg} color={textColor} message={message} />
  })

storiesOf('Modal', module)
  .addDecorator(withTheme)
  .addDecorator(withKnobs)
  .add('default', () => {
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
  })
