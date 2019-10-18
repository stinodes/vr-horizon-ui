import { styled } from '../utils'
import { layout, space, color, SpaceProps, LayoutProps } from 'styled-system'

export type BoxProps = SpaceProps & {
  color?: string
  bg?: string
} & LayoutProps
export const Box = styled('div')<BoxProps>(layout, space, color)
Box.displayName = 'Box'
