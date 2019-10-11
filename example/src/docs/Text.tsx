import React from 'react'
import { route } from 'navi'
import { Heading, Flex, Text } from '../ui'
import { ExampleDocumentation } from './Doc'

type Props = {}
const TextDocs = (props: Props) => {
  return (
    <Flex flexDirection="column">
      <Flex p={3}>
        <Heading>{'<Text/>'}</Heading>
      </Flex>
      <ExampleDocumentation title="Default" px={3}>
        <Text>Lorem Ipsum</Text>
      </ExampleDocumentation>
      <ExampleDocumentation title="Typography Props" px={3}>
        <Text fontWeight={700} fontSize={20} color="primaries.1">
          Lorem Ipsum
        </Text>
      </ExampleDocumentation>
      <ExampleDocumentation title="Heading" px={3}>
        <>
          <Heading>Lorem Ipsum</Heading>
          <Heading color="primary">Lorem Ipsum</Heading>
        </>
      </ExampleDocumentation>
    </Flex>
  )
}
export default route({
  title: '<Text/> | VR Horizon UI',
  view: <TextDocs />,
})
