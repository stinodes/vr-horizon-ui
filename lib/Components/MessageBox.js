// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { animated, useTransition } from 'react-spring'
import { Flex } from './Container'
import { Text } from './Text'

const Container = styled('div')({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
})
const AnimatedFlex = styled(Flex.withComponent(animated.div))({
  borderRadius: 5,
})

type Props = {
  message: ?string,
  color?: string,
  bg?: string,
}
export const MessageBox = ({ message, color, bg, ...props }: Props) => {
  const transition = useTransition(message, null, {
    from: { transform: 'translateY(-130%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(-130%)' },
  })
  return transition.map(
    ({ props, item }) =>
      item && (
        <Container>
          <AnimatedFlex
            my={2}
            px={5}
            py={3}
            bg={bg || 'error'}
            {...props}
            style={props}>
            <Text color={color || 'white'}>{item}</Text>
          </AnimatedFlex>
        </Container>
      ),
  )
}
