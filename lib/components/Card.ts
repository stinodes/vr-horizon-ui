import { styled, StyledComponent, getColor, getBoxShadow } from '../utils'
import { Flex } from './Flex'
import { transparentize } from 'polished'
import { CSSObject } from '@emotion/css'
import { ComponentProps } from 'react'
import { Theme } from '../theme'

export type CardProps = {
  border?: boolean | string
  shadow?: boolean | string
  borderRadius?: number | string
  shadowPosition?: 'top' | 'bottom'
}
const Card: StyledComponent<ComponentProps<typeof Flex>, CardProps> = styled(
  Flex,
)(
  { borderRadius: 3 },
  ({ theme, borderRadius, border, shadow, shadowPosition }) =>
    ({
      border:
        border &&
        `${transparentize(
          0.95,
          typeof border === 'string' ? border : getColor('darks.2', theme),
        )} 1px solid`,
      boxShadow:
        shadow &&
        (typeof shadow === 'string'
          ? shadow
          : getBoxShadow(undefined, shadowPosition, theme)),
      borderRadius,
    } as CSSObject),
)
Card.displayName = 'Card'

export { Card }
