import React, { ReactNode } from 'react'
import toJSXString from 'react-element-to-jsx-string'
import { LayoutProps, SpaceProps } from 'styled-system'
import { transparentize } from 'polished'
import { getColor, Flex, Heading } from '../ui'
import { styled } from '../utils'
import { Code } from './Code'

const NestedDocContainer = styled(Flex)({
  flexGrow: 1,
  overflow: 'auto',
  flexDirection: 'column',
})
const DocContainer = styled(Flex)(({ theme }) => ({
  borderLeft: `${getColor('lights.0', theme)} 1px solid`,
  overflow: 'hidden',
}))
const ExampleContainer = styled(Flex)<{ first?: boolean }>(
  ({ theme, first }) => ({
    borderBottom: `${getColor('lights.0', theme)} 1px solid`,
    borderTop: first ? `${getColor('lights.0', theme)} 1px solid` : '',
    boxShadow: `inset 0 3px 15px ${transparentize(
      0.85,
      getColor('darks.2', theme),
    )}`,
  }),
)

type Props = {
  title: string
  children: ReactNode
  center?: boolean
  first?: boolean
  code?: string
}
const ExampleDocumentation = ({
  title,
  children,
  center,
  first,
  code,
  ...props
}: Props & LayoutProps & SpaceProps) => {
  const containerProps = center
    ? { alignItems: 'center', justifyContent: 'center' }
    : {}
  return (
    <Flex flexDirection="column">
      <Flex>
        <ExampleContainer first={first} width={0.5} flexDirection="column">
          <Flex px={4} py={3} alignSelf="flex-end">
            <Heading fontSize={18}>{title}</Heading>
          </Flex>
          <Flex
            flexDirection="column"
            flex={1}
            pb={5}
            {...containerProps}
            {...props}>
            {children}
          </Flex>
        </ExampleContainer>
        <DocContainer width={0.5} py={3} flexDirection="column" bg="white">
          <NestedDocContainer>
            <Code>
              {code || toJSXString(children, { showFunctions: true })}
            </Code>
          </NestedDocContainer>
        </DocContainer>
      </Flex>
    </Flex>
  )
}

export { ExampleDocumentation }
