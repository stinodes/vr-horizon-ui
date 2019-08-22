import React from 'react'
import { animated, useTransition } from 'react-spring'
import { Text } from './Text'
import { styled } from '../utils'
import { Flex, FlexProps } from './Flex'

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
  message: null | string
  color?: string
  bg?: string
} & FlexProps
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
            my={1}
            px={4}
            py={2}
            bg={bg || 'error'}
            {...props}
            style={props}>
            <Text color={color || 'white'}>{item}</Text>
          </AnimatedFlex>
        </Container>
      ),
  )
}
