import React from 'react'
import { route } from 'navi'
import { __, prop, assoc } from 'ramda'
import { Heading, Flex, Input, TextArea, Select, Text } from '../ui'
import { MaxWidthBox } from '../ui'
import { useState } from 'react'
import { ExampleDocumentation } from './Doc'
import { SyntheticEvent } from 'react'
import { Accent } from '../components/Accent'

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
        <Flex pb={3} width={{ sm: 1, lg: 1 / 2 }} flexDirection="column">
          <Text mb={1}>
            Inputs are an essential component for user-interaction. On top of
            looking pretty and being developer-friendly, they should clearly
            communicate their state and fit in the layout seamlessly.
          </Text>
          <Text mb={1}>
            The states the inputs handle and visualize themselves are the
            <Accent>normal</Accent>, <Accent>hover</Accent> and{' '}
            <Accent>focused</Accent> states.
            <br />
            Other states that are supported, but you need to pass through
            yourself, are the error state, and any other state you might need.
            Passing a truthy <Accent>error-prop</Accent> will indicate a faulty
            value, and by customizing <Accent>border/outline</Accent> colors,
            you can display a success- or warn-state yourself. <br />
            The <Accent>highlight</Accent> prop can be used to display this
            state even when not focused or hovered.
          </Text>
          <Text mb={1}>
            You can optionally pass a <Accent>label</Accent> to the provided
            input components. These labels won't be rendered if you omit them.
          </Text>
          <Text>
            Layout-wise, all props a regular Flex-component would support, can
            also be used for these Input-components.
          </Text>
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
      <ExampleDocumentation center title="Layout props">
        <>
          <Input
            width={1}
            name="layout-1"
            value={value('layout-1')}
            onChange={e => onChange(e)}
            placeholder="Full width input"
          />
          <Input
            alignSelf="flex-end"
            name="layout-2"
            value={value('layout-2')}
            onChange={e => onChange(e)}
            placeholder="Flex item input"
          />
          <Input
            my={3}
            name="layout-3"
            value={value('layout-3')}
            onChange={e => onChange(e)}
            placeholder="Spaced input"
          />
        </>
      </ExampleDocumentation>
    </Flex>
  )
}

export default route({
  title: 'Input | VR Horizon UI',
  view: <InputDocs />,
})
