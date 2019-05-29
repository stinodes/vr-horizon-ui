import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import labelMd from './label.md'
import inputMd from './input.md'
import labeledInputMd from './labeledInput.md'
import fileInputMd from './fileInput.md'
import selectMd from './select.md'
import { Label, Input, LabeledInput, FileInput, Select } from '../../../lib'

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

storiesOf('Inputs', module)
  .add(
    'Label',
    () => {
      const children = text('Text', 'Label text')
      return <Label>{children}</Label>
    },
    { readme: { sidebar: labelMd } },
  )
  .add(
    'Input',
    () => {
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
    },
    {
      readme: {
        sidebar: inputMd,
      },
    },
  )
  .add(
    'LabeledInput',
    () => {
      const label = text('Label', 'First name')
      const error = boolean('Is invalid', false)
      const smallLabel = boolean('Small label', false)
      const type = text('Type', 'text')

      return (
        <LabeledInput
          name="firstName"
          onChange={action('changed')}
          type={type}
          label={label}
          smallLabel={smallLabel}
          error={error}
        />
      )
    },
    { readme: { sidebar: labeledInputMd } },
  )
  .add(
    'FileInput',
    () => {
      const size = select(
        'Size',
        { '"small"': 'small', '"regular"': null },
        null,
      )
      const placeholder = text('Placeholder', 'Select profile picture')
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
    },
    { readme: { sidebar: fileInputMd } },
  )
  .add(
    'Select',
    () => {
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
    },
    { readme: { sidebar: selectMd } },
  )
