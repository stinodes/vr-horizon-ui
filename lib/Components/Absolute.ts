import { styled } from '../utils'
import { Flex, FlexProps } from './Flex'
import {
  position,
  left,
  top,
  right,
  bottom,
  PositionProps,
  LeftProps,
  TopProps,
  RightProps,
  BottomProps,
} from 'styled-system'

export const Absolute = styled(Flex)<
  FlexProps & PositionProps & LeftProps & TopProps & RightProps & BottomProps
>({ position: 'absolute' }, position, left, top, right, bottom)
