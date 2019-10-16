import React from 'react'
import { route } from 'navi'
import {
  Card,
  Flex,
  Box,
  Heading,
  MaxWidthBox,
  Text,
  Grid,
  Col,
  Outline,
} from '../ui'
import { Accent } from '../components/Accent'
import { Link } from '../components/Link'
import { ExampleDocumentation } from './Doc'

type Props = {}
const ContainerDocs = (props: Props) => (
  <Flex flexDirection="column">
    <MaxWidthBox>
      <Flex py={3} width={{ sm: 1, lg: 1 / 2 }}>
        <Heading>Containers</Heading>
      </Flex>
      <Flex width={{ sm: 1, lg: 1 / 2 }}>
        <Text>
          There are several components provided out of the box. These can be
          used to solve your layouting needs.
          <br />
          The most notable ones are: <Accent>{'<Box/>'}</Accent>,{' '}
          <Accent>{'<Flex/>'}</Accent>, <Accent>{'<Grid/>'}</Accent> and{' '}
          <Accent>{'<Col/>'}</Accent>.
        </Text>
      </Flex>
      <Flex py={3} width={{ sm: 1, lg: 1 / 2 }}>
        <Heading>Box & Flex</Heading>
      </Flex>
      <Flex flexDirection="column" pb={3} width={{ sm: 1, lg: 1 / 2 }}>
        <Text>
          Both <Accent>{'<Box/>'}</Accent> and <Accent>{'<Flex/>'}</Accent> are
          similar. The difference between the two is that one is a flexbox by
          default, and the other isn't. (Guess which one.)
        </Text>
        <Text>
          Both components support{' '}
          <Link target="_blank" href="https://styled-system.com/">
            styled-system
          </Link>
          -type props for layouting, coloring and spacing. The flexbox component
          also supports flexbox-props, of course. Most layouting and flexbox
          properties are supported, and the spacing properties are very
          composable.
          <br />
          <Link target="_blank" href="https://styled-system.com/">
            Their documentation
          </Link>{' '}
          contains great examples of how to use their properties, using the
          provided theme and responsiveness rules.
        </Text>
      </Flex>
    </MaxWidthBox>
    <ExampleDocumentation title="Width and height" first center>
      <Box bg="reds.2" width={100} height={100} />
    </ExampleDocumentation>
    <ExampleDocumentation title="Spacing" center>
      <Box>
        <Box bg="blues.2" width={100} mb={2} height={50} />
        <Box bg="greens.2" width={100} height={50} />
      </Box>
    </ExampleDocumentation>
    <ExampleDocumentation title="Flexbox" center>
      <Flex bg="reds.2" width={200} height={150} alignItems="center">
        <Flex bg="greens.2" flex={0.3} height={75} />
        <Flex bg="blues.2" flex={0.7} height={75} />
      </Flex>
    </ExampleDocumentation>
    <ExampleDocumentation title="Flexbox and padding" center>
      <Flex bg="reds.2" width={200} height={150} p={3}>
        <Flex bg="greens.2" flex={0.3} mr={2} />
        <Flex bg="blues.2" flex={0.7} />
      </Flex>
    </ExampleDocumentation>
    <ExampleDocumentation title="More flexbox and padding" center>
      <Flex bg="reds.2" width={150} height={200} flexDirection="column" p={3}>
        <Flex bg="greens.2" flex={1} width={1 / 3} alignSelf="flex-start" />
        <Flex bg="blues.2" flex={1} width={1 / 3} alignSelf="center" />
        <Flex bg="yellows.2" flex={1} width={1 / 3} alignSelf="flex-end" />
      </Flex>
    </ExampleDocumentation>

    <MaxWidthBox mt={4}>
      <Flex py={3} width={{ sm: 1, lg: 1 / 2 }}>
        <Heading>Grids</Heading>
      </Flex>

      <Flex flexDirection="column" pb={3} width={{ sm: 1, lg: 1 / 2 }}>
        <Text>
          The <Accent>{'<Grid/>'}</Accent> and <Accent>{'<Col/>'}</Accent>{' '}
          components allow you to quickly bootstrap a grid-like layout with a
          bootstrap-like API.
          <br />
          The main difference is that here, you'll use fractures as width
          values.
          <br />
          Columns also have gutters, which will allow for a small gap between
          the content of each column.
        </Text>
      </Flex>
    </MaxWidthBox>
    <ExampleDocumentation title="Basic row of columns" first>
      <Grid>
        <Col bg="primaries.2" width={1 / 4} height={200} />
        <Col bg="primaries.1" width={1 / 4} height={200} />
        <Col bg="primaries.2" width={1 / 4} height={200} />
        <Col bg="primaries.1" width={1 / 4} height={200} />
      </Grid>
    </ExampleDocumentation>
    <ExampleDocumentation title="Column wrapping">
      <Grid>
        <Col bg="primaries.2" width={1 / 4} height={200} />
        <Col bg="primaries.3" width={1 / 4} height={200} />
        <Col bg="primaries.1" width={1 / 4} height={200} />
        <Col bg="primaries.2" width={1 / 4} height={200} />
        <Col bg="primaries.3" width={1 / 4} height={200} />
        <Col bg="primaries.1" width={1 / 4} height={200} />
        <Col bg="primaries.2" width={1 / 4} height={200} />
        <Col bg="primaries.3" width={1 / 4} height={200} />
      </Grid>
    </ExampleDocumentation>
    <ExampleDocumentation title="Variable column sizes">
      <Grid>
        <Col bg="primaries.2" width={1 / 4} height={200} />
        <Col bg="primaries.3" width={2 / 4} height={200} />
        <Col bg="primaries.1" width={1 / 4} height={200} />
        <Col bg="primaries.2" width={3 / 4} height={200} />
        <Col bg="primaries.3" width={2 / 4} height={200} />
        <Col bg="primaries.1" width={2 / 4} height={200} />
      </Grid>
    </ExampleDocumentation>
    <ExampleDocumentation title="Gutters and content">
      <Grid>
        <Col width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
        <Col width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
        <Col width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
        <Col width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
      </Grid>
    </ExampleDocumentation>
    <ExampleDocumentation title="Customized gutters">
      <Grid gutter={4}>
        <Col gutter={4} width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
        <Col gutter={4} width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
        <Col gutter={4} width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
        <Col gutter={4} width={1 / 4} height={200}>
          <Flex flex={1} bg="primary" />
        </Col>
      </Grid>
    </ExampleDocumentation>
    <MaxWidthBox mt={4}>
      <Flex py={3}>
        <Heading>Misc containers</Heading>
      </Flex>
      <Flex pb={3}>
        <Text>
          There are several additional container-components. These are already
          presentational, and styled for certain needs.
          <br />
          An example would be the <Accent>{'<Card/>'}</Accent> component.
        </Text>
      </Flex>
    </MaxWidthBox>
    <ExampleDocumentation first center title="Card">
      <Card width={200} height={150} bg="primary" />
    </ExampleDocumentation>
    <ExampleDocumentation center title="Card with shadow">
      <Card width={200} height={150} shadow bg="white" />
    </ExampleDocumentation>
    <ExampleDocumentation center title="Card with border & shadow">
      <Card width={200} height={150} shadow border bg="white" />
    </ExampleDocumentation>
    <ExampleDocumentation title="MaxWidthBox">
      <MaxWidthBox py={2} height={100} bg="primary">
        <Text color="white">
          Here, this won't show a lot. On a large screen, this will have a very
          readable width (1640px) and center itself. A very good wrapper
          component for typography and such.
        </Text>
      </MaxWidthBox>
    </ExampleDocumentation>
    <ExampleDocumentation center title="Outline">
      <Flex flexDirection="column" p={3}>
        <Outline show>
          <Text>
            If the outline prop isn't specified, the component will show itself
            on focus of it's child.
          </Text>
        </Outline>
      </Flex>
    </ExampleDocumentation>
  </Flex>
)

export default route({
  title: 'Containers | VR Horizon UI',
  view: <ContainerDocs />,
})
