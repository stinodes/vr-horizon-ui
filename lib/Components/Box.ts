import { styled } from '../utils'
import {
  layout,
  space,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system'

export type BoxProps = SpaceProps & ColorProps & LayoutProps
export const Box = styled('div')<BoxProps>(layout, space, color)
