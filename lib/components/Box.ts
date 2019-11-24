import { styled, StyledComponent } from '../utils'
import { layout, space, color, SpaceProps, LayoutProps } from 'styled-system'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Box: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  LayoutProps & SpaceProps & { bg?: string; color?: string }
> = styled('div')(layout, space, color)
Box.displayName = 'Box'
