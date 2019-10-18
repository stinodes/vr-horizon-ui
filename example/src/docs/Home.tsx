import React, { Fragment } from 'react'
import { repeat } from 'ramda'
import { color } from 'styled-system'
import { route } from 'navi'
import { Heading, Text, MaxWidthBox, Flex, Card, Box, Grid, Col } from '../ui'
import { styled } from '../utils'
import { Link } from '../components/Link'
import { Accent } from '../components/Accent'

const colors = [
  'blues',
  'teals',
  'greens',
  'reds',
  'yellows',
  'darks',
  'lights',
]
const Image = Box.withComponent('img')
const Color = styled('span')(color)

type Props = {}
const HomeDocs = (props: Props) => (
  <Flex flexDirection="column">
    <MaxWidthBox py={3} height="80vh" maxHeight={596}>
      <Flex
        pt={96}
        flexDirection="column"
        flex={1}
        justifyContent="center"
        alignItems="center">
        <Card maxWidth={476} p={4} bg="lights.4" shadow>
          <Text>
            This is the component-set used in the <Accent>VR-Horizon</Accent>{' '}
            web apps. <br />
            It is built entirely on <Accent>React</Accent> and{' '}
            <Accent>Emotion</Accent>, using <Accent>TypeScript</Accent>.
          </Text>
        </Card>
      </Flex>
    </MaxWidthBox>
    <Flex bg="lights.2">
      <MaxWidthBox py={5}>
        <Flex pb={3}>
          <Heading>Theme</Heading>
        </Flex>
        <Flex flexDirection="column">
          <Flex flexDirection="column" width={{ sm: 1, md: 0.7, lg: 0.5 }}>
            <Text mb={1} textAlign="justify">
              This component-set uses <Accent>emotion</Accent> to style its
              components. Component-props are mapped to styles using{' '}
              <Accent>styled-system</Accent>.
            </Text>
            <Text mb={1} textAlign="justify">
              Emotion has <Accent>theme</Accent>-support. A lot of the styling
              comes from this theme. These configurable styles include{' '}
              <Accent>colors</Accent>, <Accent>breakpoints</Accent>,{' '}
              <Accent>spaces</Accent> and <Accent>font-size</Accent>.
            </Text>
            <Text mb={1} mt={3}>
              By default, the theme contains the following colors:
              <br />
              {colors.map(color => (
                <Fragment>
                  <Text fontWeight={700} mt={1} textAlign="justify">
                    {repeat(null, 5).map((_, i) => (
                      <Color color={`${color}.${i}`}>
                        {color}.{i}
                        {'   '}
                      </Color>
                    ))}
                  </Text>
                </Fragment>
              ))}
            </Text>
          </Flex>
        </Flex>
      </MaxWidthBox>
    </Flex>
    <MaxWidthBox py={5}>
      <Flex pb={3} alignItems="center">
        <Heading>styled-system</Heading>
      </Flex>
      <Flex flexDirection="column">
        <Flex flexDirection="column" width={{ sm: 1, md: 0.7, lg: 0.5 }}>
          <Text textAlign="justify">
            As these components make heavy use of{' '}
            <Link target="_blank" href="https://styled-system.com/">
              styled-system
            </Link>
            , if you aren't already, get familiar with the props it typically
            supports. Components will generally support a set of these
            properties, on top of custom properties.
          </Text>
        </Flex>
        <Flex mt={2}>
          {repeat(null, 5).map(() => (
            <Image
              height={18}
              mr={1}
              src="https://camo.githubusercontent.com/8b3dc6438530a7240e952b187e40bd8380090f64/68747470733a2f2f7374796c65642d73797374656d2e636f6d2f6c6f676f2e737667"
            />
          ))}
        </Flex>
      </Flex>
    </MaxWidthBox>
    <MaxWidthBox py={5}>
      <Flex pb={3}>
        <Heading>Components</Heading>
      </Flex>
      <Grid>
        <Col width={1 / 3}>
          <Link href="containers">Containers</Link>
        </Col>
        <Col width={1 / 3}>
          <Link href="text">Text</Link>
        </Col>
        <Col width={1 / 3}>
          <Link href="button">Buttons</Link>
        </Col>
        <Col width={1 / 3}>
          <Link href="input">Inputs</Link>
        </Col>
        <Col width={1 / 3}>
          <Link href="modal">Modals</Link>
        </Col>
        <Col width={1 / 3}>
          <Link
            href="https://github.com/tannerlinsley/react-table"
            target="_blank">
            Tables
          </Link>
        </Col>
      </Grid>
    </MaxWidthBox>
  </Flex>
)

export default route({
  title: 'VR Horizon - UI',
  view: <HomeDocs />,
})
