import React, { ComponentPropsWithoutRef } from 'react'
import { animated, useTransition } from 'react-spring'
import { Text } from './Text'
import { styled } from '../utils'
import { Flex } from './Flex'

const Container = styled('div')({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
})
const AnimatedFlex: typeof Flex = styled(Flex.withComponent(animated.div))({
  borderRadius: 5,
})

type Props = {
  message: null | string
  color?: string
  bg?: string
} & ComponentPropsWithoutRef<typeof Flex>
export const MessageBox = ({ message, color, bg, ...props }: Props) => {
  const componentProps = props
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
            {...componentProps}
            style={props}>
            <Text color={color || 'white'}>{item}</Text>
          </AnimatedFlex>
        </Container>
      ),
  )
}
