import React from 'react'
import {
  Flex,
  MaxWidthBox,
  Heading,
  Text,
  Table,
  Row,
  Cell,
  Header,
} from '../ui'
import { Link } from '../components/Link'
import { route } from 'navi'
import { ExampleDocumentation } from './Doc'
import { Card } from '../ui'
import { SpaceProps } from 'styled-system'
import { Code } from './Code'

type Props = {
  columns: { label: string; key: string }[]
  data: any[]
} & SpaceProps & { bg?: string; shadow?: boolean; border?: boolean }
const ComposedTable = ({ columns, data, ...props }: Props) => (
  <Card {...props} p={2}>
    <Table width={1}>
      <thead>
        <Row border>
          {columns.map(col => (
            <Header key={col.key}>{col.label}</Header>
          ))}
        </Row>
      </thead>
      <tbody>
        {data.map(obj => (
          <Row>
            {columns.map(col => (
              <Cell key={col.key}>{obj[col.key]}</Cell>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  </Card>
)

const TableDocs = () => {
  const data = [
    { name: 'Joseph', age: 19, occupation: 'bulky boy' },
    { name: 'Suzie-Q', age: 20, occupation: 'old hag' },
    { name: 'Kars', age: '?', occupation: 'ultimate being' },
    { name: 'Lisa-Lisa', age: 54, occupation: 'martial artist' },
  ]
  return (
    <Flex flexDirection="column">
      <MaxWidthBox bg="white">
        <Flex py={3}>
          <Heading>Tables</Heading>
        </Flex>
        <Flex pb={3} width={{ sm: 1, lg: 1 / 2 }}>
          <Text mb={1}>
            This library contains several components to help you build a table.
            What we don't include however, is logic for constructing it.
            <br />
            As such, these examples will be very basic. Though in real projects,
            I would suggest using a table-tooling library coupled with this,
            such as <Link href="">react-table</Link>.
          </Text>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation
        first
        title="Simple table"
        code={`
<Card shadow m={2} p={2} bg="white">
  <Table width={1}>
    <thead>
      <Row>
        <Header>Name</Header>
        <Header>Age</Header>
        <Header>Occupation</Header>
      </Row>
    </thead>
    <tbody>
      {data.map(person => (
        <Row>
          <Cell>{person.name}</Cell>
          <Cell>{person.age}</Cell>
          <Cell>{person.occupation}</Cell>
        </Row>
      ))}
    </tbody>
  </Table>
</Card>
          `}>
        <Card shadow m={2} p={2} bg="white">
          <Table width={1}>
            <thead>
              <Row border>
                <Header>Name</Header>
                <Header>Age</Header>
                <Header>Occupation</Header>
              </Row>
            </thead>
            <tbody>
              {data.map(person => (
                <Row>
                  <Cell>{person.name}</Cell>
                  <Cell>{person.age}</Cell>
                  <Cell>{person.occupation}</Cell>
                </Row>
              ))}
            </tbody>
          </Table>
        </Card>
      </ExampleDocumentation>
      <MaxWidthBox bg="white">
        <Flex py={3}>
          <Flex width={{ sm: 1, lg: 1 / 2 }} pr={2} flexDirection="column">
            <Flex pb={3}>
              <Heading>Composing tables</Heading>
            </Flex>
            <Text mb={1}>
              Although this might seem like a lot of code for a simple table,
              the composability is what's important here.
            </Text>
            <Text mb={1}>
              Tables can take many different forms and sizes, and you can create
              a composed table pretty quickly using these components.
            </Text>
            <Text mb={1}>
              In this short example, the table takes column definitions and
              data, spitting out a fully constructed table.
            </Text>
            <Text mb={1}>
              These column definitions can be as complex as you need them to be,
              though this is where react-table would come in to help you create
              these in a more customizable way.
            </Text>
            <Text mb={1}>
              In the end, it is up to your own discretion to decide what's
              necessary for your specific use-case.
            </Text>
          </Flex>
          <Flex width={{ sm: 1, lg: 1 / 2 }}>
            <Code>
              {`
const ComposedTable = ({ columns, data, ...props }) => (
  <Card {...props} p={2}>
    <Table width={1}>
      <thead>
        <Row border>
          {columns.map(col => (
            <Header key={col.key}>
                {col.label}
            </Header>
          ))}
        </Row>
      </thead>
      <tbody>
        {data.map(obj => (
          <Row>
            {columns.map(col => (
              <Cell key={col.key}>
                {obj[col.key]}
              </Cell>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  </Card>
)
              `}
            </Code>
          </Flex>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation first title="Composed">
        <ComposedTable
          shadow
          border
          bg="white"
          m={2}
          data={data}
          columns={[
            { label: 'Name', key: 'name' },
            { label: 'Age', key: 'age' },
            { label: 'Occupation', key: 'occupation' },
          ]}
        />
      </ExampleDocumentation>
    </Flex>
  )
}

export default route({
  title: 'Tables | VR-Horizon UI',
  view: <TableDocs />,
})
