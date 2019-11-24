import { styled, StyledComponent } from '../utils'
import { Flex } from './Flex'
import { position, PositionProps } from 'styled-system'
import { ComponentPropsWithRef } from 'react'

export const Absolute: StyledComponent<
  ComponentPropsWithRef<typeof Flex>,
  PositionProps
> = styled(Flex)({ position: 'absolute' }, position)
