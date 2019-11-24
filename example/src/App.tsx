/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Flex,
  getBoxShadow,
  Heading,
  MaxWidthBox,
  Spinner,
  getColor,
} from './ui'
import { styled } from './utils'
import { Router, View, Link } from 'react-navi'
import { routes } from './docs/routes'
import { Suspense } from 'react'

const Nav = styled(Flex)(
  {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100,
  },
  ({ theme }) => ({
    background: getColor('primary', theme),
    borderBottom: `2px solid ${getColor('primaries.3', theme)}`,
    boxShadow: getBoxShadow(undefined, undefined, theme),
  }),
)

function App() {
  return (
    <Router routes={routes}>
      <Flex flex={1} minHeight="100vh" bg="lights.3" flexDirection="column">
        <Nav>
          <MaxWidthBox>
            <Link css={{ textDecoration: 'none' }} href="/">
              <Heading color="white">vr-horizon-ui</Heading>
            </Link>
          </MaxWidthBox>
        </Nav>
        <Flex flexDirection="column" flex={1} pt={80}>
          <Suspense
            fallback={
              <Flex flex={1} justifyContent="center" alignItems="center">
                <Spinner color="primary" />
              </Flex>
            }>
            <View />
          </Suspense>
        </Flex>
      </Flex>
    </Router>
  )
}

export default App
