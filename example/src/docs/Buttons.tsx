import React from 'react'
import { route } from 'navi'
import { Flex, Button, MaxWidthBox } from '../ui'
import { ExampleDocumentation } from './Doc'
import { Heading } from '../ui'

type Props = {}
const ButtonDocs = (props: Props) => (
  <Flex flexDirection="column">
    <MaxWidthBox>
      <Flex py={3} bg="white">
        <Heading>{'<Button/>'}</Heading>
      </Flex>
    </MaxWidthBox>
    <ExampleDocumentation first center title="Regular">
      <Button onClick={() => alert('Click!')} bg="primaries.2" color="white">
        Click Me!
      </Button>
    </ExampleDocumentation>
    <ExampleDocumentation center title="Colors">
      <Button onClick={() => alert('Click!')} bg="lights.3" color="primary">
        Click Me!
      </Button>
    </ExampleDocumentation>
    <ExampleDocumentation center title="Shadow">
      <Button
        raised
        onClick={() => alert('Click!')}
        bg="primaries.2"
        color="white">
        Click Me!
      </Button>
    </ExampleDocumentation>
    <ExampleDocumentation center title="Glow">
      <Button
        glow
        onClick={() => alert('Click!')}
        bg="primaries.2"
        color="white">
        Click Me!
      </Button>
    </ExampleDocumentation>
    <ExampleDocumentation center title="Small">
      <Button
        onClick={() => alert('Click!')}
        bg="primaries.2"
        size="small"
        color="white">
        Click Me!
      </Button>
    </ExampleDocumentation>
    <ExampleDocumentation center title="Circle">
      <Button
        onClick={() => alert('Click!')}
        bg="primaries.2"
        size="circle"
        color="white">
        x
      </Button>
    </ExampleDocumentation>
  </Flex>
)

export default route({
  title: '<Button> | VR Horizon UI',
  view: <ButtonDocs />,
})
