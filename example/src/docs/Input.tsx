import React from 'react'
import { route } from 'navi'
import { __, prop, assoc } from 'ramda'
import { Heading, Flex, Input, TextArea, Select } from '../ui'
import { MaxWidthBox } from '../ui'
import { useState } from 'react'
import { ExampleDocumentation } from './Doc'
import { SyntheticEvent } from 'react'

const useInputs = () => {
  const [state, setState] = useState<{ [name: string]: string }>({})
  const value = prop(__, state)
  const onChange = (e: SyntheticEvent<HTMLInputElement>) =>
    setState(assoc(e.currentTarget.name, e.currentTarget.value))
  return { value, onChange }
}

const InputDocs = (props: {}) => {
  const { value, onChange } = useInputs()
  return (
    <Flex flexDirection="column">
      <MaxWidthBox>
        <Flex py={3}>
          <Heading>Input</Heading>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation first center title="Simple text input">
        <Input
          name="simple"
          value={value('simple')}
          onChange={e => onChange(e)}
          placeholder="Simple input"
        />
      </ExampleDocumentation>
      <ExampleDocumentation center title="Labeled">
        <Input
          name="labeled"
          label="Labeled input"
          value={value('labeled')}
          onChange={e => onChange(e)}
          placeholder="Labeled input"
        />
      </ExampleDocumentation>
      <ExampleDocumentation center title="Highlight">
        <Input
          highlight
          name="highlight"
          value={value('highlight')}
          onChange={e => onChange(e)}
          placeholder="Highlighted input"
        />
      </ExampleDocumentation>
      <ExampleDocumentation center title="Error">
        <Input
          error
          name="error"
          label="Error input"
          value={value('error')}
          onChange={e => onChange(e)}
          placeholder="Error input"
        />
      </ExampleDocumentation>
      <ExampleDocumentation center title="Custom border">
        <Input
          border={'greens.2'}
          name="custom-border"
          label="Custom border"
          value={value('custom-border')}
          onChange={e => onChange(e)}
          placeholder="Custom border input"
        />
      </ExampleDocumentation>
      <ExampleDocumentation center title="Text area">
        <TextArea
          name="textarea"
          label="Text area"
          value={value('textarea')}
          onChange={e => onChange(e)}
          placeholder="Write some text here..."
        />
      </ExampleDocumentation>
      <ExampleDocumentation center title="Select">
        <Select
          name="select"
          label="Choose your favorite food"
          value={value('select')}
          onChange={e => onChange(e)}>
          <option>Pizza</option>
          <option>Burgers</option>
          <option>Noodles</option>
          <option>Beer</option>
        </Select>
      </ExampleDocumentation>
    </Flex>
  )
}

export default route({
  title: 'Input | VR Horizon UI',
  view: <InputDocs />,
})
