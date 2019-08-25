import React from 'react'
import {
  getColor,
  getBoxShadow,
  Flex,
  Heading,
  MaxWidthBox,
  Card,
  Text,
  Theme,
} from './ui'
import _styled, { CreateStyled } from '@emotion/styled'

const styled = _styled as CreateStyled<Theme>
const Nav = styled(MaxWidthBox)(
  {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: 'white',
  },
  ({ theme }) => ({
    boxShadow: getBoxShadow(undefined, undefined, theme),
  }),
)

const Accent = styled(Text.withComponent('span'))(({ theme }) => ({
  color: getColor('primaries.1', theme),
  fontWeight: 700,
}))

function App() {
  return (
    <Flex
      flex={1}
      minHeight="100vh"
      bg="lights.3"
      flexDirection="column"
      pt={96}>
      <Nav py={3}>
        <Heading>vr-horizon-ui hoer</Heading>
      </Nav>
      <MaxWidthBox py={3}>
        <Flex flexDirection="column" alignItems="center">
          <Card maxWidth={476} p={4} bg="lights.4" shadow>
            <Text>
              This is the component-set used in the <Accent>VR-Horizon</Accent>{' '}
              web apps. It is built entirely on <Accent>React</Accent> and{' '}
              <Accent>Emotion</Accent>, using <Accent>TypeScript</Accent>.
            </Text>
          </Card>
        </Flex>
      </MaxWidthBox>
    </Flex>
  )
}

export default App
